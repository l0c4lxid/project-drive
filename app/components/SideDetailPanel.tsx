import Image from "next/image";
import type { Project } from "../data/projects";

type SideDetailPanelProps = {
  project: Project | null;
  onClose: () => void;
};

export default function SideDetailPanel({
  project,
  onClose,
}: SideDetailPanelProps) {
  if (!project) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40">
      <button
        type="button"
        aria-label="Close details"
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/20 dark:bg-slate-950/60"
      />
      <aside className="absolute right-0 top-0 h-full w-full max-w-[420px] overflow-y-auto border-l border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Project details</p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 transition-colors hover:border-[#1A73E8] hover:text-[#1A73E8] dark:border-slate-700 dark:text-slate-300"
          >
            Close
          </button>
        </div>

        <div className="space-y-6 p-5">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
            <Image
              src={project.thumbnailImage}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {project.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {project.shortDescription}
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                Tech Stack
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-[#1A73E8] hover:text-[#1A73E8] dark:border-slate-700 dark:text-slate-300"
              >
                Open GitHub
              </a>
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#1A73E8]/30 bg-[#1A73E8]/10 px-4 py-2 text-xs font-semibold text-[#1A73E8] transition-colors hover:border-[#1A73E8]/50 hover:bg-[#1A73E8]/20"
                >
                  Open Live Demo
                </a>
              ) : (
                <span className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-400 dark:border-slate-700 dark:text-slate-500">
                  Demo unavailable
                </span>
              )}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
