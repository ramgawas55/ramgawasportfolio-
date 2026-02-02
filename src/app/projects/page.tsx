"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import FilterTabs from "@/components/FilterTabs";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { projects } from "@/data/profile";
import { ProjectCategory } from "@/types";

export default function ProjectsPage() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");
  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((project) => project.category === active);
  }, [active]);

  return (
    <Section
      eyebrow="projects"
      title="Selected builds with production impact"
      description="Each project is designed to ship quickly without sacrificing reliability. Filter by discipline to explore what matters most."
    >
      <FilterTabs active={active} onChange={setActive} />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
