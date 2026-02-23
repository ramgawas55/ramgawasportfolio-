"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import TimelineLog from "@/components/TimelineLog";
import { profile, timeline } from "@/data/profile";

export default function AboutPage() {
  return (
    <div>
      <Section
        eyebrow="about"
        title="Linux-first systems, DevOps mindset"
        description={profile.subtitle}
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-sm leading-relaxed text-[#c9c9c9]">
            <p>{profile.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {profile.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[#1a1a1a] bg-[#050505] px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#ff3b30]"
                >
                  {badge}
                </span>
              ))}
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
