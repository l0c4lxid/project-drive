"use client";

import { useTheme } from "next-themes";
import type { ProjectType } from "../data/projects";

const views = [
  { id: "grid", label: "Grid" },
  { id: "list", label: "List" },
] as const;

type ViewMode = (typeof views)[number]["id"];

type TopBarProps = {
  title: string;
  search: string;
  onSearchChange: (value: string) => void;
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
  filter: "All" | ProjectType;
  onFilterChange: (filter: "All" | ProjectType) => void;
  filters: Array<"All" | ProjectType>;
  onMenuClick: () => void;
};

export default function TopBar({
  title,
  search,
  onSearchChange,
  view,
  onViewChange,
  filter,
  onFilterChange,
  filters,
  onMenuClick,
}: TopBarProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const isClientMounted = resolvedTheme !== undefined;
  const isDark =
    isClientMounted &&
    (theme === "dark" || (theme === "system" && resolvedTheme === "dark"));

  return (
    <div className="sticky top-0 z-30 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/90">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-3 px-4 py-3 lg:px-8">
        <div className="flex flex-1 items-center gap-2">
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-[#1A73E8] hover:text-[#1A73E8] lg:hidden dark:border-slate-700 dark:text-slate-300"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
            <GitHubMarkIcon />
          </div>
          <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {title}
          </span>
        </div>

        <div className="order-3 w-full md:order-none md:w-[min(520px,50vw)]">
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search projects"
              className="h-10 w-full rounded-full border border-slate-200 bg-white pl-9 pr-4 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[#1A73E8] focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-wrap items-center justify-end gap-2">
          <div className="flex items-center rounded-full border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-900">
            {views.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={view === item.id}
                onClick={() => onViewChange(item.id)}
                className={`flex h-8 items-center gap-1 rounded-full px-3 text-xs font-medium transition-colors ${
                  view === item.id
                    ? "bg-[#1A73E8]/10 text-[#1A73E8]"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {item.id === "grid" ? <GridIcon /> : <ListIcon />}
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-900">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={filter === item}
                onClick={() => onFilterChange(item)}
                className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  filter === item
                    ? "bg-[#1A73E8]/10 text-[#1A73E8]"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-[#1A73E8] hover:text-[#1A73E8] dark:border-slate-700 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </div>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 6h13" />
      <path d="M8 12h13" />
      <path d="M8 18h13" />
      <circle cx="4" cy="6" r="1.5" />
      <circle cx="4" cy="12" r="1.5" />
      <circle cx="4" cy="18" r="1.5" />
    </svg>
  );
}

function MenuIcon() {
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
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function SunIcon() {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.9 4.9l1.4 1.4" />
      <path d="M17.7 17.7l1.4 1.4" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.9 19.1l1.4-1.4" />
      <path d="M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
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
      <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 109.8 9.8z" />
    </svg>
  );
}

function GitHubMarkIcon() {
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
