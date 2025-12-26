export type ProjectType = "Web" | "UI/UX" | "App";

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  thumbnailImage: string;
  githubUrl: string;
  demoUrl?: string;
  techStack: string[];
  type: ProjectType;
  year: number;
};

export const projectFilters: Array<"All" | ProjectType> = [
  "All",
  "Web",
  "UI/UX",
  "App",
];

export const projects: Project[] = [
  {
    id: "drive-analytics",
    title: "City Mobility Analytics",
    shortDescription:
      "A data-rich dashboard for monitoring multimodal transit performance and rider demand in real time.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    githubUrl: "https://github.com/example/city-mobility-analytics",
    demoUrl: "https://city-mobility-demo.vercel.app",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Mapbox"],
    type: "Web",
    year: 2024,
  },
  {
    id: "brand-system",
    title: "Minimalist Brand System",
    shortDescription:
      "A UI/UX kit for startups featuring typography scales, iconography, and reusable interface patterns.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    githubUrl: "https://github.com/example/minimal-brand-system",
    techStack: ["Figma", "Design Tokens", "Storybook"],
    type: "UI/UX",
    year: 2023,
  },
  {
    id: "habit-tracker",
    title: "Habit Loop Mobile",
    shortDescription:
      "A compact habit tracker that blends streak analytics with calm, focused daily prompts.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
    githubUrl: "https://github.com/example/habit-loop-mobile",
    demoUrl: "https://habit-loop.app",
    techStack: ["React Native", "Expo", "Supabase"],
    type: "App",
    year: 2024,
  },
  {
    id: "portfolio-cms",
    title: "Portfolio CMS Studio",
    shortDescription:
      "A content workspace for agencies to manage case studies, assets, and launch checklists.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    githubUrl: "https://github.com/example/portfolio-cms-studio",
    demoUrl: "https://portfolio-cms-studio.vercel.app",
    techStack: ["Next.js", "Prisma", "PostgreSQL"],
    type: "Web",
    year: 2022,
  },
  {
    id: "product-showcase",
    title: "AR Product Showcase",
    shortDescription:
      "An immersive product preview experience with interactive 3D rotations and guided tours.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
    githubUrl: "https://github.com/example/ar-product-showcase",
    demoUrl: "https://ar-showcase.app",
    techStack: ["Three.js", "WebGL", "Vite"],
    type: "UI/UX",
    year: 2023,
  },
  {
    id: "fleet-ops",
    title: "Fleet Ops Portal",
    shortDescription:
      "A logistics operations hub that centralizes maintenance schedules and asset readiness.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
    githubUrl: "https://github.com/example/fleet-ops-portal",
    techStack: ["Vue", "TypeScript", "Tailwind CSS"],
    type: "Web",
    year: 2021,
  },
  {
    id: "photo-curation",
    title: "Travel Photo Curation",
    shortDescription:
      "A mobile workspace for organizing travel photos into smart albums and highlights.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    githubUrl: "https://github.com/example/travel-photo-curation",
    demoUrl: "https://travel-curation.app",
    techStack: ["SwiftUI", "CloudKit"],
    type: "App",
    year: 2022,
  },
  {
    id: "motion-system",
    title: "E-commerce Motion System",
    shortDescription:
      "A motion framework that defines transitions, micro-interactions, and cart feedback loops.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=900&q=80",
    githubUrl: "https://github.com/example/ecommerce-motion-system",
    techStack: ["After Effects", "Lottie", "Figma"],
    type: "UI/UX",
    year: 2024,
  },
  {
    id: "collaboration-suite",
    title: "Realtime Collaboration Suite",
    shortDescription:
      "A workspace for distributed teams with presence indicators, live cursors, and smart docs.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    githubUrl: "https://github.com/example/realtime-collaboration-suite",
    demoUrl: "https://collaboration-suite.vercel.app",
    techStack: ["Next.js", "Liveblocks", "Tailwind CSS"],
    type: "Web",
    year: 2023,
  },
  {
    id: "recipe-capture",
    title: "Recipe Capture",
    shortDescription:
      "A camera-first cooking app that turns scanned notes into structured recipe cards.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    githubUrl: "https://github.com/example/recipe-capture",
    techStack: ["Flutter", "Firebase", "Vision API"],
    type: "App",
    year: 2021,
  },
];
