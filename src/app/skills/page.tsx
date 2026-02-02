"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import SkillBar from "@/components/SkillBar";
import { skillCategories } from "@/data/profile";

export default function SkillsPage() {
  return (
    <Section
      eyebrow="skills"
      title="Terminal-to-production expertise"
      description="Each skill is tuned for production readiness, with a focus on Linux workflows, reliable APIs, and elegant interfaces."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-3xl border border-[#1f2a20] bg-[#0f1410] p-6"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-mono text-sm uppercase tracking-[0.4em] text-[#4dff8a]">
                {category.title}
              </h3>
              <span className="text-xs uppercase tracking-[0.3em] text-[#8aa18a]">
                CLI
              </span>
            </div>
            <div className="space-y-4">
              {category.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                >
                  <SkillBar skill={skill} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
