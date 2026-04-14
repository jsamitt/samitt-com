export const navLinks = [
  { label: "What I Do", href: "#what-i-do" },
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
    title: "Fractional CPO / Interim Product Leadership",
    description:
      "Embed as your senior product leader. Own the roadmap, the team, and the outcomes.",
    icon: "compass",
  },
  {
    title: "0-to-1 Product Builds",
    description:
      "Take products from concept to shipped — including hands-on prototyping with AI tools.",
    icon: "rocket",
  },
  {
    title: "Product Team Design",
    description:
      "Stand up product teams, operating models, and discovery practices from scratch.",
    icon: "users",
  },
  {
    title: "AI-Accelerated Development",
    description:
      "Prototype, build, and iterate using vibe coding tools — 10-20x faster than traditional product cycles.",
    icon: "zap",
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
  status: string;
  builtWith: string;
}

export const currentBuilds: CurrentBuild[] = [
  {
    name: "Mise en Place",
    description:
      "A freemium, AI-powered family meal planning app that gets smarter every week — building context on who's home, what they love, and how your kitchen actually works.",
    status: "In Development",
    builtWith: "AI-assisted vibe coding tools, Claude API",
  },
  {
    name: "Wordella",
    description:
      "A freemium mobile app for young children focused on early spelling and reading skills. Built in partnership with a design collaborator, targeting the App Store.",
    status: "In Alpha testing",
    builtWith: "AI-assisted vibe coding tools",
  },
  {
    name: "Latin Lives",
    description:
      "A Latin language learning app for high school students. Features photo/upload capture of teacher lesson materials, and creates gamified learning modules for vocabulary, grammar, and culture topics. Includes a teacher dashboard for tracking student progress.",
    status: "In Beta testing",
    builtWith: "AI-assisted vibe coding tools, Claude API",
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
    name: "Email triage agent",
    slug: "email-triage",
    description: "AI-powered email triage agent for a shared Gmail inbox — ingests, classifies, summarizes, and drafts AI-generated replies that learn over time",
    language: "TypeScript",
    isPublic: true,
  },
  {
    name: "Awaire",
    slug: "awaire",
    description: "Mobile & web app for construction worker safety — workforce heat stress monitoring, predictive alerts, and regulatory compliance",
    language: "TypeScript",
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
    name: "Wordella",
    slug: "wordella",
    description: "Early literacy spelling and reading app for young children",
    language: "React Native",
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
];

export const socialLinks = {
  linkedin: "https://linkedin.com/in/jeffsamitt",
  github: "https://github.com/jsamitt",
  email: "mailto:jeff@samitt.co",
};
