export const navLinks = [
  { label: "What I do", href: "#what-i-do" },
  { label: "Work", href: "#work" },
  { label: "Building", href: "#building" },
  { label: "GitHub", href: "#github" },
  { label: "Thinking", href: "#thinking" },
  { label: "Background", href: "#background" },
  { label: "Contact", href: "#contact" },
];

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Fractional CPO / interim product leadership",
    description:
      "Embed as your senior product leader. Own the roadmap, the team, and the outcomes.",
    icon: "compass",
  },
  {
    title: "0-to-1 product builds",
    description:
      "Take products from concept to shipped — including hands-on prototyping with AI tools.",
    icon: "rocket",
  },
  {
    title: "Product team design",
    description:
      "Stand up product teams, operating models, and discovery practices from scratch.",
    icon: "users",
  },
  {
    title: "AI-accelerated development",
    description:
      "Ship production software with AI, with the guardrails to keep it honest. I built the harness for it: Proof, an open-source Claude Code plugin.",
    icon: "zap",
  },
];

export interface Outcome {
  figure: string;
  caption: string;
}

export const outcomes: Outcome[] = [
  {
    figure: "$0 → $150M",
    caption:
      "Monthly spend on a new checkout product, built with Google Chrome & Android · Capital One",
  },
  {
    figure: ">$30M",
    caption:
      "Annual fraud loss avoidance and opex savings from automated decisioning · Capital One",
  },
  {
    figure: "<12 months",
    caption:
      "From MVP to nationwide rollout, delivered 50% faster than planned · CarMax",
  },
];

export interface WorkEntry {
  company: string;
  context: string;
  challenge: string;
  whatIDid: string;
  outcome: string;
  tech?: string;
  builtByMe?: boolean;
}

export const selectedWork: WorkEntry[] = [
  {
    company: "Stealth startup",
    context: "Co-founder, product & engineering",
    challenge:
      "Build a modern platform for sports pools and competitive play from a blank page \u2014 with real-time standings that hold up when everyone hits refresh at once on a Sunday afternoon",
    whatIDid:
      "Co-founded the company and owned product direction from first sketch through launch. Shipped the full stack myself: a cross-platform React Native/Expo app on Postgres, with Redis-powered real-time leaderboards",
    outcome:
      "Took a mobile-first platform from concept to a live product in users\u2019 hands",
    tech: "React Native/Expo, Postgres, Redis, Claude Code",
    builtByMe: true,
  },
  {
    company: "Capital One",
    context: "Senior Director of Product, payments & tokenization",
    challenge:
      "Build a new ecommerce checkout product in partnership with Google Chrome & Android",
    whatIDid: "Led design, development, and launch end-to-end",
    outcome: "Scaled from $0 to $150M in monthly spend",
  },
  {
    company: "Capital One",
    context: "Senior Director of Product",
    challenge:
      "Reduce fraud losses and servicing costs through better automated decisioning",
    whatIDid:
      "Delivered software and data products enabling improved automated decisioning",
    outcome: ">$30M annual fraud loss avoidance and opex savings",
  },
  {
    company: "Koalafi",
    context: "VP Head of Product, Series-A fintech",
    challenge:
      "Launch first premium lending product with full credit-spectrum applicant experience",
    whatIDid:
      "Designed and launched end-to-end, including COVID re-entry strategy",
    outcome:
      "Industry-leading transparency with zero drop-off in applicant conversion",
  },
  {
    company: "Tigeraire",
    context: "President & COO, hardware/software IoT startup",
    challenge: "Automate customer and partner email management for a lean team",
    whatIDid:
      "Conceived, designed, and built a production AI application entirely hands-on — Gmail integration, automated categorization, Claude API-powered reply drafting with a continuous human feedback loop, activity dashboard and archive",
    outcome:
      "Fully deployed production app running in-house; eliminated manual email triage",
    tech: "Claude API, vibe coding tools (Cursor, Replit, Windsurf)",
    builtByMe: true,
  },
  {
    company: "Tigeraire",
    context: "President & COO, hardware/software IoT startup",
    challenge:
      "Overhaul online presence to reposition the company for both B2B lead gen and direct-to-consumer sales",
    whatIDid:
      "Conceived, designed, and built a production site optimized for web and mobile, entirely hands-on — integration with Shopify, a regional 3PL, Amazon Seller Central, HubSpot CRM, Intuit QuickBooks, Google Analytics, GSuite, and GitHub",
    outcome:
      "Fully deployed production ecommerce presence running on Shopify and Amazon; eliminated manual fulfillment; automated customer service operations",
    tech: "Vibe coding tools (Cursor, ChatGPT, Grok)",
    builtByMe: true,
  },
  {
    company: "CarMax",
    context: "Group Product Leader",
    challenge:
      "Transform CarMax from walk-in retail to digital omnichannel retailer",
    whatIDid:
      "Built contact center management software and Salesforce CRM optimization",
    outcome:
      "MVP delivered 50% faster than planned; nationwide rollout in under 12 months",
  },
];

export interface CurrentBuild {
  name: string;
  description: string;
  status:
    | "Live"
    | "On the App Store"
    | "In development"
    | "Internal alpha"
    | "Alpha testing"
    | "Beta testing";
  builtWith: string;
  link?: { label: string; href: string };
}

export const currentBuilds: CurrentBuild[] = [
  {
    name: "Stealth startup",
    description:
      "A mobile-first platform for sports pools and competitive play. Think office pool, minus the spreadsheet and the guy who forgets to update it. More soon \u2014 it\u2019s stealth for a reason.",
    status: "Live",
    builtWith: "React Native/Expo, Postgres, Redis, Claude Code",
  },
  {
    name: "GymTime",
    description:
      "A strength-training iOS app for people who came to lift, not to post. Big numbers, a quiet rest timer, a lock-screen Live Activity, and no feed whatsoever.",
    status: "Internal alpha",
    builtWith: "SwiftUI and Claude Code, from a Claude Design handoff",
  },
  {
    name: "Wordella",
    description:
      "A freemium word game where young kids build spelling and reading skills in an enchanted forest. Built with a design collaborator. Now on the App Store, after surviving Apple\u2019s Kids Category review, which turns out to be its own kind of test.",
    status: "On the App Store",
    builtWith: "React Native/Expo and Claude Code",
    link: { label: "View on the App Store", href: "https://apps.apple.com/us/app/wordella/id6760268398" },
  },
];

export interface GitHubRepo {
  name: string;
  slug: string;
  description: string;
  language: string;
  isPublic: boolean;
}

export const githubRepos: GitHubRepo[] = [
  {
    name: "Proof",
    slug: "proof-claude-plugin",
    description:
      "Open-source Claude Code harness for solo builders \u2014 spec \u2192 build \u2192 review \u2192 ship, with AI reviewers on every PR and a running record of why things were built the way they were",
    language: "Shell",
    isPublic: true,
  },
  {
    name: "GymTime",
    slug: "GymTime",
    description:
      "Strength-training iOS app \u2014 big numbers, quiet timer, no feed, and a lock-screen Live Activity for the active workout",
    language: "Swift",
    isPublic: true,
  },
  {
    name: "WTFork",
    slug: "wtfork",
    description:
      "AI-powered family meal planning app \u2014 weekly plans, recipes, and grocery lists that learn what your household actually eats",
    language: "Swift",
    isPublic: false,
  },
  {
    name: "Email triage agent",
    slug: "email-triage",
    description: "AI-powered email triage agent for a shared Gmail inbox — ingests, classifies, summarizes, and drafts AI-generated replies that learn over time",
    language: "TypeScript",
    isPublic: true,
  },
  {
    name: "Wordella",
    slug: "wordella",
    description: "Early literacy spelling and reading game for young children \u2014 now live on the App Store",
    language: "React Native",
    isPublic: false,
  },
  {
    name: "Latin Lives",
    slug: "latin-lives",
    description: "Gamified Latin language learning app with teacher dashboard and lesson capture",
    language: "Swift",
    isPublic: false,
  },
  {
    name: "Awaire",
    slug: "awaire",
    description: "Mobile & web app for construction worker safety — workforce heat stress monitoring, predictive alerts, and regulatory compliance",
    language: "TypeScript",
    isPublic: false,
  },
  {
    name: "Samitt.co",
    slug: "samitt-com",
    description: "This site — personal website built with Next.js and Tailwind",
    language: "TypeScript",
    isPublic: true,
  },
  {
    name: "Heat relief & hydration calculator",
    slug: "heat-relief-and-hydration-calculator",
    description: "Web calculator for work schedule and hydration break recommendations",
    language: "JavaScript",
    isPublic: true,
  },
];

export interface Article {
  title: string;
  excerpt: string;
  link: string;
}

export const articles: Article[] = [
  {
    title: "Proof, a development harness for solo builders",
    excerpt:
      "Working alone with AI, you don\u2019t have coordination problems. You have memory problems and second-opinion problems. So I built a harness for those.",
    link: "https://www.linkedin.com/pulse/proof-development-harness-solo-builders-jeff-samitt-sdwjc/",
  },
  {
    title: "Most Product Teams Are Still Staffed Like It\u2019s 2020",
    excerpt:
      "AI hasn\u2019t just made product teams faster. It\u2019s reshaping who\u2019s on the team, what each person does, and what good product leadership looks like.",
    link: "https://www.linkedin.com/posts/jeffsamitt_most-product-teams-are-still-staffed-like-share-7441921133764853760-nnNt",
  },
  {
    title: "Product Mindset in the AI Era",
    excerpt:
      "The foundations haven\u2019t changed \u2014 empowered teams, customer obsession, outcome focus. But the team model has to evolve.",
    link: "https://www.linkedin.com/in/jeffsamitt/overlay/1774289085235/single-media-viewer/?profileId=ACoAAAAZ4lYBhUjliXNxwOnxwx78WRVO5BEeW0w",
  },
];

export interface TimelineEntry {
  company: string;
  role: string;
  period: string;
}

export const timeline: TimelineEntry[] = [
  {
    company: "Proof LLC",
    role: "Fractional CPO & Product Consultant",
    period: "2020\u2013Present",
  },
  {
    company: "Tigeraire",
    role: "President & COO",
    period: "2023\u2013Present",
  },
  {
    company: "Capital One",
    role: "Senior Director of Product",
    period: "2021\u20132023",
  },
  {
    company: "Koalafi",
    role: "VP Head of Product",
    period: "2019\u20132020",
  },
  {
    company: "CarMax",
    role: "Group Product Leader",
    period: "2018\u20132019",
  },
  {
    company: "Capital One",
    role: "Director of Product",
    period: "2011\u20132018",
  },
];

export const socialLinks = {
  linkedin: "https://linkedin.com/in/jeffsamitt",
  github: "https://github.com/jsamitt",
  email: "mailto:jeff@samitt.co",
};
