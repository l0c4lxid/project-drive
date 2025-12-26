import type { ReactNode } from "react";
import type { ProjectType } from "../data/projects";

type NavItem = {
  label: string;
  value: "All" | ProjectType;
  icon: ReactNode;
};

type SideNavProps = {
  items: NavItem[];
  active: "All" | ProjectType;
  onChange: (value: "All" | ProjectType) => void;
  isOpen: boolean;
  onClose: () => void;
};

export default function SideNav({
  items,
  active,
  onChange,
  isOpen,
  onClose,
}: SideNavProps) {
  return (
    <>
      <aside className="sticky top-[76px] hidden h-[calc(100vh-96px)] w-56 flex-col gap-4 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur lg:flex dark:border-slate-800 dark:bg-slate-900/80">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
            Workspace
          </p>
          <div className="mt-3 space-y-1">
            {items.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => onChange(item.value)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  active === item.value
                    ? "bg-[#1A73E8]/10 text-[#1A73E8]"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/60"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-xs text-slate-500 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-400">
          Drop new work here to keep your portfolio organized by type.
        </div>
      </aside>

      <div
        className={`fixed inset-0 z-40 transition ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        } lg:hidden`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className={`absolute inset-0 bg-slate-900/30 transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`absolute left-0 top-0 h-full w-[280px] border-r border-slate-200 bg-white p-4 shadow-xl transition-transform dark:border-slate-800 dark:bg-slate-900 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Menu
            </p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-700 dark:text-slate-300"
            >
              Close
            </button>
          </div>

          <div className="mt-5 space-y-1">
            {items.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => {
                  onChange(item.value);
                  onClose();
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  active === item.value
                    ? "bg-[#1A73E8]/10 text-[#1A73E8]"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/60"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}

export const navItems: NavItem[] = [
  { label: "All Projects", value: "All", icon: <FolderIcon /> },
  { label: "Web Projects", value: "Web", icon: <MonitorIcon /> },
  { label: "UI/UX Systems", value: "UI/UX", icon: <PenToolIcon /> },
  { label: "App Builds", value: "App", icon: <PhoneIcon /> },
];

function FolderIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M7 20h10" />
      <path d="M9 16v4" />
      <path d="M15 16v4" />
    </svg>
  );
}

function PenToolIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 20l7-7" />
      <path d="M17 5l2 2" />
      <path d="M7 7l5 5" />
      <path d="M4 20l4-1 8-8-3-3-8 8-1 4z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M10 18h4" />
    </svg>
  );
}
