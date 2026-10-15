#!/usr/bin/env bash
# Waits for Vercel's Production deployment of origin/main to finish, using the
# deployment status Vercel reports to GitHub. Prints "success" (the only thing
# it ever writes to stdout) and exits 0 when it succeeds; exits 1 if it fails,
# or if nothing finishes within TIMEOUT seconds (default 480, which keeps the
# whole run under a 10-minute tool timeout). Progress goes to stderr.
# Used by /proof-ship (see .claude/harness.json, ship.steps).
#
# Vercel creates the GitHub deployment only once its build has finished, with a
# single status. A build that fails usually never appears at all, so a failed
# deploy tends to show up here as a timeout, not as a "failure" state.
set -euo pipefail

timeout=${TIMEOUT:-480}
if ! [[ $timeout =~ ^[0-9]+$ ]]; then
  echo "TIMEOUT must be a whole number of seconds (got '$timeout')" >&2
  exit 1
fi
deadline=$(( $(date +%s) + timeout ))

repo=$(gh repo view --json nameWithOwner -q .nameWithOwner)
GIT_TERMINAL_PROMPT=0 GIT_SSH_COMMAND="ssh -o BatchMode=yes -o ConnectTimeout=15" git fetch -q origin
sha=$(git rev-parse origin/main)
echo "Waiting on the Production deployment of $(git log -1 --format='%h %s' "$sha")" >&2

errfile=$(mktemp)
trap 'rm -f "$errfile"' EXIT

poll() {
  local id
  id=$(gh api "repos/$repo/deployments?sha=$sha&environment=Production" -q '.[0].id // empty' 2>"$errfile") || return 1
  if [ -z "$id" ]; then
    echo "not created yet"
  else
    gh api "repos/$repo/deployments/$id/statuses" -q '.[0].state // "pending"' 2>"$errfile"
  fi
}

failures=0
last=""
while :; do
  # A failed poll (network blip, 5xx, rate limit) counts as "not ready yet";
  # three in a row means GitHub itself is unreachable, so stop.
  if state=$(poll); then
    failures=0
  else
    failures=$(( failures + 1 ))
    echo "Polling GitHub failed (${failures}/3): $(tr '\n' ' ' < "$errfile")" >&2
    if [ "$failures" -ge 3 ]; then
      echo "Giving up: could not read deployment status from GitHub" >&2
      exit 1
    fi
    state=""
  fi

  case "$state" in
    success) echo "success"; exit 0 ;;
    failure|error) echo "Vercel deployment of ${sha:0:7} ended in '$state'" >&2; exit 1 ;;
  esac
  if [ -n "$state" ] && [ "$state" != "$last" ]; then
    echo "Deployment: $state" >&2
    last=$state
  fi

  if [ "$(date +%s)" -ge "$deadline" ]; then
    echo "Timed out after ${timeout}s waiting for the Vercel deployment of ${sha:0:7}." >&2
    echo "Most likely the build failed (failed builds never reach GitHub) or Vercel skipped this commit." >&2
    echo "Check https://github.com/$repo/deployments and the Vercel dashboard." >&2
    exit 1
  fi
  sleep 15
done
