/**
 * Editable homepage content for DevOps Manager LLP.
 * Change copy here; sections read from this file.
 */
import {
  BarChart3,
  Users,
  SquareCheckBig,
  TrendingUp,
  Network,
  LineChart,
  UserCheck,
  Layers,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export const brand = {
  name: "DevOps Manager LLP",
  shortName: "DevOps Manager",
  tagline: "Modern Business Management Suite",
};

export type NavItem = { label: string; href?: `#${string}`; soon?: boolean };

/** Items without href are kept in the menu for a later phase and render as "Soon". */
export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Why Manager", href: "#why-manager" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Modern Business Management Suite",
  headline: { lead: "Manage Today.", middle: "Build a", highlight: "Better Tomorrow." },
  body: "DevOps Manager builds business software, workflow automation, CRM, ERP and AI-powered systems that bring every part of your operations into one clear, connected place.",
  primaryCta: { label: "Explore Our Solutions", href: "#about" },
  secondaryCta: { label: "Contact Us", href: "#contact" },
  pillars: [
    { icon: BarChart3, title: "Projects", sub: "Made Simple" },
    { icon: Users, title: "Teams", sub: "More Productive" },
    { icon: SquareCheckBig, title: "Work", sub: "Better Organised" },
    { icon: TrendingUp, title: "Business", sub: "Ready to Scale" },
  ] satisfies { icon: LucideIcon; title: string; sub: string }[],
};

export const about = {
  eyebrow: "About DevOps Manager",
  heading: { lead: "Technology That Makes Business Management", highlight: "Smarter." },
  paragraphs: [
    "DevOps Manager LLP designs software automation and intelligent management systems for organisations that want less friction and more control. We connect the people, processes and data behind your business so everyday work runs on clear, reliable systems.",
    "From educational institutions to fast-moving startups and retail brands, we build solutions that fit how you actually operate — and grow with you as you scale.",
  ],
  areas: [
    { title: "Business Management Software", text: "One suite for daily operations." },
    { title: "CRM & ERP", text: "Customers, resources and finance in sync." },
    { title: "Workflow Automation", text: "Repetitive steps handled for you." },
    { title: "AI-Powered Solutions", text: "Insights and forecasts built in." },
  ],
  audiences: ["Educational institutions", "Startups", "E-commerce & retail"],
  modules: ["CRM", "ERP", "Workflows", "Analytics", "AI Engine", "Finance"],
};

export const globalPresence = {
  eyebrow: "Our Global Presence",
  heading: { lead: "Connecting Businesses.", highlight: "Expanding Possibilities." },
  body: "With a growing international presence, DevOps Manager LLP brings technology and business automation solutions closer to organizations across different markets.",
  locations: [
    {
      id: "dubai",
      city: "Dubai",
      country: "United Arab Emirates",
      status: "Operational Location",
      latitude: 25.2048,
      longitude: 55.2708,
      tone: "blue",
      markerOffset: { x: 0, y: 0 },
    },
    {
      id: "mangalore",
      city: "Mangalore",
      country: "India",
      status: "Operational Location",
      latitude: 12.9141,
      longitude: 74.856,
      tone: "purple",
      markerOffset: { x: -30, y: 10 },
    },
    {
      id: "bangalore",
      city: "Bangalore",
      country: "India",
      status: "Operational Location",
      latitude: 12.9716,
      longitude: 77.5946,
      tone: "red",
      markerOffset: { x: 30, y: -10 },
    },
    {
      id: "california",
      city: "California",
      country: "United States",
      status: "Coming Soon",
      latitude: 36.7783,
      longitude: -119.4179,
      tone: "future",
      markerOffset: { x: 0, y: 0 },
    },
  ],
} as const;

export type Feature = {
  num: string;
  title: string;
  short: string;
  text: string;
  highlights: string[];
  icon: LucideIcon;
};

export const whyManager = {
  eyebrow: "Why The Manager",
  heading: { lead: "More than management.", highlight: "A smarter way to move forward." },
  body: "Bring clarity, coordination and control to the everyday operations that drive your business.",
  features: [
    {
      num: "01",
      title: "Everything Works Together",
      short: "Unified",
      text: "Connect essential business functions through a unified management experience.",
      highlights: ["Shared data", "One workspace", "Fewer handoffs"],
      icon: Network,
    },
    {
      num: "02",
      title: "Decisions Backed by Clarity",
      short: "Clarity",
      text: "Present business information in a way that helps teams understand performance and make informed decisions.",
      highlights: ["Live dashboards", "Clear reports", "Real-time insight"],
      icon: LineChart,
    },
    {
      num: "03",
      title: "Built Around Accountability",
      short: "Accountable",
      text: "Highlight ownership, coordination, and visibility across everyday business operations.",
      highlights: ["Clear ownership", "Task visibility", "Audit trails"],
      icon: UserCheck,
    },
    {
      num: "04",
      title: "Adaptable to Your Industry",
      short: "Adaptable",
      text: "Support different business environments and operational requirements with solutions shaped around you.",
      highlights: ["Education", "Startups", "Retail & e-commerce"],
      icon: Layers,
    },
    {
      num: "05",
      title: "Ready for What's Next",
      short: "Scalable",
      text: "Scale with automation and systems that evolve as your business needs grow.",
      highlights: ["Automation", "AI-ready", "Built to scale"],
      icon: Rocket,
    },
  ] satisfies Feature[],
};

export const industries = {
  eyebrow: "Whom We Serve",
  heading: {
    lead: "Technology designed around",
    highlight: "the way your industry works.",
  },
  body: "Every industry has different challenges. We develop software and automation solutions that help businesses simplify operations, improve coordination, and move forward with confidence.",
  closing: "Different industries. One smarter approach.",
  closingBody:
    "We bring software, automation, and intelligent systems together to address the unique challenges of every business.",
  panels: [
    {
      name: "Education",
      href: "#contact",
      tone: "education",
      imageAlt: "An educator meeting with students at a bright modern campus",
      headline: "Smarter management for better learning environments.",
      description:
        "Empower educational institutions with connected digital systems that simplify administration, improve coordination, and support better institutional management.",
      areas: [
        "Student & admission management",
        "Administrative workflows",
        "Fee & record management",
        "Institutional communication",
      ],
      preview: ["Student overview", "Admissions", "Fees & records"],
    },
    {
      name: "Start-ups",
      href: "#contact",
      tone: "startups",
      imageAlt: "A startup team collaborating around a laptop in their workspace",
      headline: "Build faster. Manage smarter. Scale better.",
      description:
        "Help growing businesses establish efficient processes, manage customers, automate operations, and build a stronger foundation for sustainable growth.",
      areas: [
        "CRM & customer management",
        "Workflow automation",
        "Business process coordination",
        "Operational visibility",
      ],
      preview: ["Business performance", "Customer pipeline", "Workflow progress"],
    },
    {
      name: "E-commerce & Retail",
      href: "#contact",
      tone: "retail",
      imageAlt: "A retail owner using a tablet to manage a modern boutique",
      headline: "Connect every part of your commerce business.",
      description:
        "Simplify commerce operations through connected systems that help manage products, orders, inventory, customers, and everyday sales activities.",
      areas: [
        "Order management",
        "Inventory workflows",
        "Customer management",
        "Sales operations",
      ],
      preview: ["Orders today", "Inventory", "Sales activity"],
    },
  ],
};

export const whatWeDo = {
  eyebrow: "What We Do",
  heading: {
    lead: "Technology that works",
    highlight: "for your business.",
  },
  body: "From custom software to intelligent automation, we build systems that make everyday business operations simpler, smarter, and more connected.",
  closing: "One business. Multiple possibilities. Smarter technology.",
  closingBody:
    "We bring software, automation, and intelligent systems together to help businesses operate with greater clarity and efficiency.",
  panels: [
    {
      id: "business-software",
      href: "#contact",
      tone: "blue",
      title: "Business Software",
      headline: "Software built around your business.",
      description:
        "Purpose-built software designed to support your organization’s unique requirements, processes, and operational goals.",
      visual: "business",
      stats: [
        { label: "Active projects", value: "24" },
        { label: "Team capacity", value: "86%" },
        { label: "Tasks this week", value: "138" },
      ],
    },
    {
      id: "workflow-automation",
      href: "#contact",
      tone: "purple",
      title: "Workflow Automation",
      headline: "Make workflows work smarter.",
      description:
        "Connect business processes, reduce repetitive tasks, and simplify the way work gets done.",
      visual: "workflow",
    },
    {
      id: "crm-erp",
      href: "#contact",
      tone: "red",
      title: "CRM & ERP Systems",
      headline: "Bring your business together.",
      description:
        "Create connected management systems that help organizations coordinate customers, resources, and operations.",
      visual: "crm",
    },
    {
      id: "ai-systems",
      href: "#contact",
      tone: "purple",
      title: "AI-Powered Systems",
      headline: "Make intelligence part of your operations.",
      description:
        "Integrate intelligent capabilities into business systems to support smarter workflows and business processes.",
      visual: "ai",
    },
  ],
};
