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
}: TopBarProps) {
  return (
    <div className="sticky top-0 z-30 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-3 px-4 py-3 lg:px-8">
        <div className="flex flex-1 items-center gap-2">
          <div className="h-9 w-9 rounded-lg border border-slate-200 bg-white p-2">
            <div className="h-full w-full rounded-md bg-gradient-to-br from-blue-500 via-blue-400 to-sky-300" />
          </div>
          <span className="text-lg font-semibold text-slate-900">{title}</span>
        </div>

        <div className="order-3 w-full md:order-none md:w-[min(520px,50vw)]">
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search projects"
              className="h-10 w-full rounded-full border border-slate-200 bg-white pl-9 pr-4 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-wrap items-center justify-end gap-2">
          <div className="flex items-center rounded-full border border-slate-200 bg-white p-1">
            {views.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={view === item.id}
                onClick={() => onViewChange(item.id)}
                className={`flex h-8 items-center gap-1 rounded-full px-3 text-xs font-medium transition-colors ${
                  view === item.id
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.id === "grid" ? <GridIcon /> : <ListIcon />}
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-slate-200 bg-white p-1">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={filter === item}
                onClick={() => onFilterChange(item)}
                className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  filter === item
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
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
