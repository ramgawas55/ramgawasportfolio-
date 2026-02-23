"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { education, experience } from "@/data/profile";

export default function ExperiencePage() {
  return (
    <Section
      eyebrow="experience"
      title="Hands-on DevOps experience"
      description="Infrastructure delivery, automation, and CI/CD practices aligned with production workflows."
    >
      <div className="space-y-6">
        {experience.map((role) => (
          <motion.div
            key={role.company}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-[#1a1a1a] bg-[#050505] p-6"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-[#ffffff]">
                  {role.role}
                </h3>
                <p className="mt-2 text-sm text-[#c9c9c9]">
                  {role.company} · {role.location}
                </p>
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff3b30]">
                {role.period}
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[#ffffff]">
              {role.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#ff3b30]">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div className="mt-16">
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-[#ff3b30]">
            education
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-[#ffffff]">
            Academic background
          </h3>
          <p className="mt-3 text-sm text-[#c9c9c9]">
            Formal education aligned with systems, networking, and IT
            fundamentals.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {education.map((item) => (
            <motion.div
              key={item.program}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-[#1a1a1a] bg-[#050505] p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff4d22]">
                {item.period}
              </p>
              <h4 className="mt-3 text-lg font-semibold text-[#ffffff]">
                {item.program}
              </h4>
              <p className="mt-2 text-sm text-[#c9c9c9]">
                {item.institution}
              </p>
              <p className="mt-4 text-sm text-[#ff3b30]">{item.score}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
