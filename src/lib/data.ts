export const navLinks = [
  { label: "How we work", href: "/#how" },
  { label: "Offerings", href: "/#offerings" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

export interface Engagement {
  title: string;
  /** The recommended starting point: ink border and "Start here" flag. One per set. */
  recommended?: boolean;
  who: string;
  what: string;
  /** Described in time and team, never money. */
  shape: string;
  cta: { label: string; href: string };
}

export const engagements: Engagement[] = [
  {
    title: "Proof sprint",
    recommended: true,
    who: "Founders and teams with an idea and no proof yet.",
    what: "User interviews, a clickable prototype and a clear build-or-don\u2019t answer.",
    shape: "Two to three weeks, one small team.",
    cta: { label: "Talk to us about a sprint \u2192", href: "#contact" },
  },
  {
    title: "Build to launch",
    who: "Teams with a proven idea that needs shipping.",
    what: "A production app on the web or the App Store, and the product decisions behind it.",
    shape: "Two to four months, in two-week releases.",
    cta: { label: "Plan a build with us \u2192", href: "#contact" },
  },
  {
    title: "Product partner",
    who: "Teams that ship already and want senior product leadership beside them.",
    what: "Roadmap, discovery and design reviews, plus hands-on prototypes when a debate needs settling.",
    shape: "A few days a week, quarter by quarter.",
    cta: { label: "Ask about a partnership \u2192", href: "#contact" },
  },
];

export interface Offering {
  name: string;
  description: string;
  /** Optional link out: `text` must appear verbatim in `description` and becomes the link. */
  link?: { text: string; href: string };
}

export const offerings: Offering[] = [
  {
    name: "Proof sprint",
    description:
      "Product discovery: user interviews, a clickable prototype, a build plan and estimate.",
  },
  {
    name: "Proof of concept / MVP",
    description:
      "Working software that tests the idea with real users or stakeholders.",
  },
  {
    name: "0-to-1 product build",
    description:
      "A shipped iOS, Android or web product, from spec to App Store or web.",
  },
  {
    name: "AI workflow automation",
    description:
      "A production AI tool (triage, drafting, ops), with a human feedback loop.",
  },
  {
    name: "Digital transformation",
    description:
      "Diagnosis, then replatforming, extending, or adding instrumentation and observability to lift reliability, usability and funnel metrics.",
  },
  {
    name: "Software factory setup",
    description:
      "A product development lifecycle (PDLC) harness, a more advanced version of our Proof plugin, plus the training to run it, so the team can build and maintain its own software.",
    link: {
      text: "Proof plugin",
      href: "https://github.com/jsamitt/proof-claude-plugin",
    },
  },
  {
    name: "Fractional product leadership",
    description:
      "Roadmap, discovery practice and team design, embedded part-time.",
  },
];

export interface ThesisPoint {
  title: string;
  body: string;
}

export const thesisPoints: ThesisPoint[] = [
  {
    title: "Code got cheap",
    body: "AI tools turn a prompt into a working app in an afternoon. That\u2019s great, right up until it ships to people who didn\u2019t need it.",
  },
  {
    title: "Judgment didn\u2019t",
    body: "Knowing who it\u2019s for, what to leave out and when it\u2019s ready still takes people who\u2019ve shipped products for a living.",
  },
  {
    title: "So we lead with product",
    body: "Strategy and UX first, then we build fast with the same AI tools everyone has. The difference is where we point them.",
  },
];

export interface ProcessStep {
  title: string;
  description: string;
  /** Optional link out: `text` must appear verbatim in `description` and becomes the link. */
  link?: { text: string; href: string };
}

export const processSteps: ProcessStep[] = [
  {
    title: "Listen",
    description: "We start with the people who\u2019ll use it, not the feature list.",
  },
  {
    title: "Prove it",
    description: "A prototype in real hands tells us what\u2019s worth building.",
  },
  {
    title: "Build",
    description:
      "AI tools make us fast. Every change is specced, reviewed and logged in Proof, our open-source build harness.",
    link: { text: "Proof", href: "https://github.com/jsamitt/proof-claude-plugin" },
  },
  {
    title: "Ship",
    description: "Released, measured and improved in small steps.",
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
      "Monthly spend on a new digital commerce checkout product, built with Google Chrome & Android teams · Capital One",
  },
  {
    figure: ">$30M",
    caption:
      "Annualized fraud loss avoidance and opex savings obtained from realtime automated decisioning platform · Capital One",
  },
  {
    figure: "<12 months",
    caption:
      "New omni-channel sales contact center, from MVP to nationwide rollout, delivered 50% faster than planned · CarMax",
  },
];

export const shippedFacts: Outcome[] = [
  {
    figure: "On the App Store",
    caption: "Apple Developer, with apps published and live",
  },
  {
    figure: "In production",
    caption: "Products running for real customers",
  },
  {
    figure: "Open source",
    caption: "Proof, the build harness we use on every project",
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

export const pastRoles: WorkEntry[] = [
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

export type ProjectStatus =
  | "Open beta"
  | "Closed beta"
  | "In production"
  | "On the App Store"
  | "Closed beta \u00b7 client build"
  | "Prototype"
  | "Open source";

export interface Project {
  name: string;
  featured: boolean;
  status: ProjectStatus;
  /** One line. */
  story: string;
  /** Featured projects only. */
  stack?: string;
  link?: { label: string; href: string };
  screenshot?: { src: string; alt: string; frame: "phone" | "browser"; width: number; height: number };
  /** Case-study path; unused until the pages exist (#55). */
  caseStudy?: string;
}

export const projects: Project[] = [
  {
    name: "GymTime",
    featured: true,
    status: "Open beta",
    story:
      "Strength training for people who want to track their progress without taking notes: recommended routines, simple steps, easy-to-read numbers & rest timers.",
    stack: "SwiftUI",
    screenshot: {
      src: "/work/gymtime.jpg",
      alt: "GymTime\u2019s New workout screen, choosing a training goal",
      frame: "phone",
      width: 359,
      height: 782,
    },
  },
  {
    name: "HeadPro",
    featured: true,
    status: "Closed beta",
    story:
      "Sports pools with live schedules, scores, & standings that keep up when everyone hits refresh on a Sunday afternoon.",
    stack: "React Native \u00b7 Expo \u00b7 Postgres \u00b7 Redis",
    screenshot: {
      src: "/work/headpro.jpg",
      alt: "HeadPro\u2019s sign-in screen",
      frame: "phone",
      width: 359,
      height: 782,
    },
  },
  {
    name: "Tigeraire email triage",
    featured: true,
    status: "In production",
    story:
      "Reads a shared support inbox, triages and categorizes email, retrieves context, learns your style, and drafts the reply, then a person reviews it and hits send.",
    stack: "Python \u00b7 Flask \u00b7 Claude API \u00b7 Gmail API",
    screenshot: {
      src: "/work/tigeraire-email-triage.jpg",
      alt: "Tigeraire email triage reviewing a warranty email, with action items and a drafted reply",
      frame: "browser",
      width: 1520,
      height: 2250,
    },
  },
  {
    name: "Wordella",
    featured: false,
    status: "On the App Store",
    story:
      "A word game for young kids that made it through App Store review for children\u2019s apps, which is its own small boss level.",
    link: {
      label: "View on the App Store",
      href: "https://apps.apple.com/us/app/wordella/id6760268398",
    },
  },
  {
    name: "WTFork",
    featured: false,
    status: "Closed beta \u00b7 client build",
    story: "Family meal planning that learns what your house will actually eat.",
  },
  {
    name: "Tigeraire ecommerce",
    featured: false,
    status: "In production",
    story:
      "A storefront rebuilt for business leads and direct sales, wired to Shopify, Amazon and fulfillment.",
  },
  {
    name: "Awaire",
    featured: false,
    status: "Prototype",
    story:
      "Heat-stress monitoring and alerts that keep construction crews safe on hot job sites.",
  },
  {
    name: "Proof harness",
    featured: false,
    status: "Open source",
    story:
      "The open-source harness we build every project with: spec, build, review, ship.",
    link: {
      label: "View on GitHub",
      href: "https://github.com/jsamitt/proof-claude-plugin",
    },
  },
];

export interface Article {
  title: string;
  excerpt: string;
  link: string;
  kind: string;
  published: string;
}

export const articles: Article[] = [
  {
    title: "Proof, a development harness for solo builders",
    excerpt:
      "Working alone with AI, you don\u2019t have coordination problems. You have memory problems and second-opinion problems. So I built a harness for those.",
    link: "https://www.linkedin.com/pulse/proof-development-harness-solo-builders-jeff-samitt-sdwjc/",
    kind: "Article · LinkedIn",
    published: "October 2026",
  },
  {
    title: "Product Mindset in the AI Era",
    excerpt:
      "The foundations haven\u2019t changed \u2014 empowered teams, customer obsession, outcome focus. But the team model has to evolve.",
    link: "/writing/product-mindset-in-the-ai-era-2026.pdf",
    kind: "Presentation",
    published: "May 2026",
  },
  {
    title: "Product Mindset",
    excerpt:
      "A high-level introduction for leaders: why legacy delivery wastes so much, what makes a modern product, and how to set product teams up to succeed.",
    link: "/writing/product-mindset-2020.pdf",
    kind: "Presentation",
    published: "August 2020",
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
    period: "2023\u20132026",
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
  email: "mailto:hello@proofsoftware.co",
};
