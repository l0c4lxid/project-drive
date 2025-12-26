import type { Project } from "../data/projects";
import ProjectCard from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
  onSelect: (project: Project) => void;
  selectedId?: string;
};

export default function ProjectGrid({
  projects,
  onSelect,
  selectedId,
}: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-slate-300 bg-white/70 p-10 text-center dark:border-slate-700 dark:bg-slate-900/60">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          No projects match your search yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onSelect={onSelect}
          isSelected={selectedId === project.id}
        />
      ))}
    </div>
  );
}
