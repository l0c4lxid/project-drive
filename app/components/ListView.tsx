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
    <div className="space-y-4">
      <div className="space-y-3 md:hidden">
        {projects.map((project) => {
          const tags = project.tags?.length ? project.tags : [project.type];

          return (
            <button
              key={project.id}
              type="button"
              onClick={() => onSelect(project)}
              className={`w-full rounded-xl border border-slate-200 bg-white p-3 text-left transition-colors dark:border-slate-800 dark:bg-slate-900 ${
                selectedId === project.id
                  ? "border-[#1A73E8]"
                  : "hover:border-[#1A73E8]"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-20 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
                  <Image
                    src={project.thumbnailImage}
                    alt={project.title}
                    fill
                    sizes="80px"
                    className="object-cover"
                    unoptimized={project.thumbnailImage.includes("image.thum.io")}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {project.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span>{project.year}</span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span>{project.type}</span>
              </div>

              <div className="mt-2 flex flex-wrap gap-1">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
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
            </button>
          );
        })}
      </div>

      <div className="hidden rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 md:block">
        <table className="w-full table-fixed text-sm">
          <colgroup>
            <col className="w-[34%]" />
            <col className="w-[12%]" />
            <col className="w-[26%]" />
            <col className="w-[8%]" />
            <col className="w-[20%]" />
          </colgroup>
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
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                  {project.type}
                </td>
                <td className="px-4 py-3 break-words text-slate-600 dark:text-slate-300">
                  {project.techStack.join(", ")}
                </td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                  {project.year}
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap items-center gap-2">
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
    </div>
  );
}
