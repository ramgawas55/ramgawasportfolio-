"use client";

import { useMemo, useState } from "react";
import Section from "@/components/Section";
import TerminalConsole from "@/components/TerminalConsole";
import { profile, projects, skillCategories } from "@/data/profile";

const defaultSection = "help";

export default function TerminalPage() {
  const [section, setSection] = useState(defaultSection);
  const sectionData = useMemo(() => {
    if (section === "about") {
      return {
        title: "About",
        content: [
          profile.summary,
          profile.subtitle,
        ],
      };
    }
    if (section === "skills") {
      return {
        title: "Skills",
        content: skillCategories.map(
          (category) => `${category.title}: ${category.items.length} tools`
        ),
      };
    }
    if (section === "projects") {
      return {
        title: "Projects",
        content: projects.map((project) => project.title),
      };
    }
    if (section === "contact") {
      return {
        title: "Contact",
        content: [profile.email, profile.phone, profile.location],
      };
    }
    return {
      title: "Help",
      content: ["Type a command to load a panel.", "Try: about, skills, projects"],
    };
  }, [section]);

  return (
    <Section
      eyebrow="terminal"
      title="Interactive terminal mode"
      description="Use CLI commands to explore portfolio data with terminal-style output."
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <TerminalConsole onSectionChange={setSection} />
        <div className="rounded-3xl border border-[#1a1a1a] bg-[#050505] p-6">
          <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-4">
            <h3 className="font-mono text-sm uppercase tracking-[0.3em] text-[#ff3b30]">
              {sectionData.title}
            </h3>
            <span className="text-xs uppercase tracking-[0.3em] text-[#c9c9c9]">
              live
            </span>
          </div>
          <div className="mt-4 space-y-3 text-sm text-[#c9c9c9]">
            {sectionData.content.map((line) => (
              <div key={line} className="flex gap-2">
                <span className="text-[#ff4d22]">»</span>
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
