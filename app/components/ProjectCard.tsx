import Image from "next/image";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
  isSelected?: boolean;
};

export default function ProjectCard({
  project,
  onSelect,
  isSelected,
}: ProjectCardProps) {
  const useUnoptimized = project.thumbnailImage.includes("image.thum.io");
  const tags = project.tags?.length ? project.tags : [project.type];

  return (
    <div className="group relative">
      <button
        type="button"
        onClick={() => onSelect(project)}
        className={`w-full overflow-hidden rounded-lg border bg-white text-left transition-colors dark:border-slate-800 dark:bg-slate-900 ${
          isSelected
            ? "border-[#1A73E8]"
            : "border-slate-200 hover:border-[#1A73E8]"
        }`}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            unoptimized={useUnoptimized}
          />
        </div>
        <div className="flex items-center justify-between px-3 py-2">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-slate-900 dark:text-slate-100">
              {project.title}
            </p>
            <div className="mt-1 flex flex-wrap gap-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </button>

      <a
        href={project.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-500 opacity-0 shadow-sm transition-colors transition-opacity hover:border-[#1A73E8] hover:text-[#1A73E8] group-hover:opacity-100 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-300"
        aria-label={`Open ${project.title} on GitHub`}
      >
        <GitHubIcon />
      </a>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 00-3.16 19.48c.5.1.68-.22.68-.48v-1.7c-2.77.6-3.35-1.17-3.35-1.17-.46-1.17-1.12-1.48-1.12-1.48-.9-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.9 1.53 2.36 1.08 2.94.83.1-.65.35-1.08.63-1.33-2.22-.25-4.56-1.1-4.56-4.9 0-1.08.4-1.97 1.04-2.66-.1-.25-.45-1.27.1-2.64 0 0 .85-.27 2.8 1.02a9.6 9.6 0 015.1 0c1.95-1.29 2.8-1.02 2.8-1.02.55 1.37.2 2.39.1 2.64.65.7 1.04 1.58 1.04 2.66 0 3.8-2.35 4.65-4.6 4.9.36.31.68.9.68 1.83v2.7c0 .26.18.58.68.48A10 10 0 0012 2z" />
    </svg>
  );
}
