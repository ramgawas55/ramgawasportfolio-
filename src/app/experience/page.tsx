"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { experience } from "@/data/profile";

export default function ExperiencePage() {
  return (
    <Section
      eyebrow="experience"
      title="Career highlights and impact"
      description="Resume-ready timeline focused on leadership, reliability, and measurable outcomes."
    >
      <div className="space-y-6">
        {experience.map((role) => (
          <motion.div
            key={role.company}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-[#1f2a20] bg-[#0f1410] p-6"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-[#e6ffe9]">
                  {role.role}
                </h3>
                <p className="mt-2 text-sm text-[#8aa18a]">
                  {role.company} · {role.location}
                </p>
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#4dff8a]">
                {role.period}
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[#e6ffe9]">
              {role.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#ff2d55]">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
