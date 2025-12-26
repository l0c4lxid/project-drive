import Image from "next/image";
import type { Project } from "../data/projects";

type ListViewProps = {
  projects: Project[];
  onSelect: (project: Project) => void;
  selectedId?: string;
};

export default function ListView({
  projects,
  onSelect,
  selectedId,
}: ListViewProps) {
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
    <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <table className="min-w-[760px] w-full text-sm">
        <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-800/80 dark:text-slate-400">
          <tr>
            <th className="px-4 py-3 font-medium">Name</th>
            <th className="px-4 py-3 font-medium">Type</th>
            <th className="px-4 py-3 font-medium">Tech</th>
            <th className="px-4 py-3 font-medium">Year</th>
            <th className="px-4 py-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr
              key={project.id}
              onClick={() => onSelect(project)}
              className={`cursor-pointer border-t border-slate-100 transition-colors hover:bg-[#1A73E8]/5 dark:border-slate-800 dark:hover:bg-[#1A73E8]/10 ${
                selectedId === project.id ? "bg-[#1A73E8]/10" : ""
              }`}
            >
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-14 overflow-hidden rounded-md border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
                    <Image
                      src={project.thumbnailImage}
                      alt={project.title}
                      fill
                      sizes="56px"
                      className="object-cover"
                      unoptimized={project.thumbnailImage.includes("image.thum.io")}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-medium text-slate-900 dark:text-slate-100">
                      {project.title}
                    </p>
                    <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{project.type}</td>
              <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                {project.techStack.join(", ")}
              </td>
              <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{project.year}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 transition-colors hover:border-[#1A73E8] hover:text-[#1A73E8] dark:border-slate-700 dark:text-slate-300"
                  >
                    GitHub
                  </a>
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="rounded-full border border-[#1A73E8]/30 bg-[#1A73E8]/10 px-3 py-1 text-xs font-medium text-[#1A73E8] transition-colors hover:border-[#1A73E8]/50 hover:bg-[#1A73E8]/20"
                    >
                      Demo
                    </a>
                  ) : (
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-400 dark:border-slate-700 dark:text-slate-500">
                      No demo
                    </span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
