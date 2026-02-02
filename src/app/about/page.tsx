"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import TimelineLog from "@/components/TimelineLog";
import { philosophies, profile, timeline } from "@/data/profile";

export default function AboutPage() {
  return (
    <div>
      <Section
        eyebrow="about"
        title="Engineering with a Linux core"
        description="I build systems that behave predictably under pressure. My workflow blends terminal-first discipline with modern UX, so every interface feels fast, intentional, and trusted."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-sm leading-relaxed text-[#8aa18a]">
            <p>{profile.summary}</p>
            <p>
              My focus is to reduce operational friction by aligning product UX,
              automation, and observability from day one. I translate complex
              requirements into developer-friendly experiences that scale.
            </p>
            <div className="rounded-2xl border border-[#1f2a20] bg-[#0f1410] p-5 font-mono text-xs uppercase tracking-[0.3em] text-[#4dff8a]">
              Philosophy
              <div className="mt-4 space-y-2 text-[#8aa18a]">
                {philosophies.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {timeline.map((item) => (
              <motion.div
                key={item.timestamp}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
              >
                <TimelineLog item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
