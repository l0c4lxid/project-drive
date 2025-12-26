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
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className={`group w-full overflow-hidden rounded-lg border bg-white text-left transition-colors ${
        isSelected
          ? "border-blue-500"
          : "border-slate-200 hover:border-blue-400"
      }`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <Image
          src={project.thumbnailImage}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="pointer-events-none absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="rounded-full border border-slate-200/80 bg-white/90 p-1 text-slate-500 shadow-sm">
            <DotsIcon />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-slate-900">
            {project.title}
          </p>
        </div>
      </div>
    </button>
  );
}

function DotsIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="5" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="19" cy="12" r="1.5" />
    </svg>
  );
}
