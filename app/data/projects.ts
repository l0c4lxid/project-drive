import projectsData from "./projects.json";

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

export const projects = projectsData as Project[];
