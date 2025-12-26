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
    id: "ayam-geprek-profile",
    title: "Ayam Geprek Profile",
    shortDescription:
      "A vibrant brand profile site highlighting menu highlights and signature flavors.",
    thumbnailImage:
      "https://image.thum.io/get/width/1200/https://ayam-geprek-profile.vercel.app/",
    githubUrl: "https://github.com/l0c4lxid/ayam-geprek-profile",
    demoUrl: "https://ayam-geprek-profile.vercel.app/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    type: "UI/UX",
    year: 2024,
  },
  {
    id: "tk-pkk-siwi-lestari",
    title: "TK PKK Siwi Lestari",
    shortDescription:
      "A calm, parent-friendly school profile with clear sections for programs and enrollment.",
    thumbnailImage:
      "https://image.thum.io/get/width/1200/https://tk-pkk-siwi-lestari.vercel.app/",
    githubUrl: "https://github.com/l0c4lxid/tk-pkk-siwi-lestari",
    demoUrl: "https://tk-pkk-siwi-lestari.vercel.app/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    type: "UI/UX",
    year: 2024,
  },
  {
    id: "awul-awul-market",
    title: "Awul-Awul Market",
    shortDescription:
      "A marketplace landing UI focused on product discovery and promotional highlights.",
    thumbnailImage:
      "https://image.thum.io/get/width/1200/https://awul-awul-market.vercel.app/",
    githubUrl: "https://github.com/l0c4lxid/awul-awul-market",
    demoUrl: "https://awul-awul-market.vercel.app/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    type: "UI/UX",
    year: 2024,
  },
  {
    id: "desain-interior-template",
    title: "Desain Interior Template",
    shortDescription:
      "A clean interior design showcase with emphasis on visuals, layout, and services.",
    thumbnailImage:
      "https://image.thum.io/get/width/1200/https://desain-interior-template.vercel.app/",
    githubUrl: "https://github.com/l0c4lxid/DesainInteriorTemplate",
    demoUrl: "https://desain-interior-template.vercel.app/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    type: "UI/UX",
    year: 2024,
  },
];
