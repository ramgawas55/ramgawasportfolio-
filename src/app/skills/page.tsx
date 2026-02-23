"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { skillCategories } from "@/data/profile";

export default function SkillsPage() {
  return (
    <Section
      eyebrow="skills"
      title="Skills built for Linux & DevOps delivery"
      description="Grouped by discipline to highlight infrastructure, automation, networking, and tooling depth."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-3xl border border-[#1a1a1a] bg-[#050505] p-6"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-mono text-sm uppercase tracking-[0.4em] text-[#ff3b30]">
                {category.title}
              </h3>
              <span className="text-xs uppercase tracking-[0.3em] text-[#c9c9c9]">
                CLI
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-full border border-[#1a1a1a] bg-[#0d0d0d] px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#ffffff]"
                  title={skill.tooltip}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
