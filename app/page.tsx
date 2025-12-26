"use client";

import { useMemo, useState } from "react";
import ListView from "./components/ListView";
import ProjectGrid from "./components/ProjectGrid";
import SideDetailPanel from "./components/SideDetailPanel";
import TopBar from "./components/TopBar";
import { projectFilters, projects } from "./data/projects";
import type { Project, ProjectType } from "./data/projects";

export default function Home() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"All" | ProjectType>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesType = filter === "All" || project.type === filter;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        project.title.toLowerCase().includes(normalizedSearch);

      return matchesType && matchesSearch;
    });
  }, [filter, search]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#e8f0fe_0,_#f8fafc_45%,_#f4f6fb_100%)] text-slate-900">
      <TopBar
        title="Projects"
        search={search}
        onSearchChange={setSearch}
        view={view}
        onViewChange={setView}
        filter={filter}
        onFilterChange={setFilter}
        filters={projectFilters}
      />

      <main className="mx-auto max-w-[1440px] px-4 pb-16 pt-6 lg:px-8">
        <div
          className={`transition-[padding] duration-200 ${
            selectedProject ? "lg:pr-[420px]" : ""
          }`}
        >
          {view === "grid" ? (
            <ProjectGrid
              projects={filteredProjects}
              onSelect={setSelectedProject}
              selectedId={selectedProject?.id}
            />
          ) : (
            <ListView
              projects={filteredProjects}
              onSelect={setSelectedProject}
              selectedId={selectedProject?.id}
            />
          )}
        </div>
      </main>

      <SideDetailPanel
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
