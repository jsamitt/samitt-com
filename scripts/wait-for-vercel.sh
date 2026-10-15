#!/usr/bin/env bash
# Waits for Vercel's Production deployment of origin/main to finish, using the
# deployment status Vercel reports to GitHub. Prints "success" and exits 0 when
# it succeeds; exits 1 if it fails or nothing finishes within TIMEOUT seconds
# (default 600). Used by /proof-ship (see .claude/harness.json, ship.steps).
set -euo pipefail

repo=$(gh repo view --json nameWithOwner -q .nameWithOwner)
git fetch -q origin
sha=$(git rev-parse origin/main)
deadline=$(( $(date +%s) + ${TIMEOUT:-600} ))

while :; do
  id=$(gh api "repos/$repo/deployments?sha=$sha&environment=Production" -q '.[0].id // empty')
  if [ -n "$id" ]; then
    state=$(gh api "repos/$repo/deployments/$id/statuses" -q '.[0].state // "pending"')
    case "$state" in
      success) echo "success"; exit 0 ;;
      failure|error) echo "Vercel deployment of ${sha:0:7} ended in '$state'" >&2; exit 1 ;;
    esac
  fi
  if [ "$(date +%s)" -ge "$deadline" ]; then
    echo "Timed out waiting for the Vercel deployment of ${sha:0:7}" >&2
    exit 1
  fi
  sleep 15
done
