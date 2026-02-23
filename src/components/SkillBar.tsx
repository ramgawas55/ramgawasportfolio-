"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SkillItem } from "@/types";

export default function SkillBar({ skill }: { skill: SkillItem }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px", once: true });

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl border border-[#1a1a1a] bg-[#050505] p-4"
    >
      <div className="flex items-center justify-between text-sm text-[#ffffff]">
        <span className="font-mono uppercase tracking-[0.2em]">
          {skill.name}
        </span>
        <span className="text-xs text-[#c9c9c9]">{skill.level}%</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-[#0d0d0d]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-2 rounded-full bg-[#ff3b30]"
        />
      </div>
      <div className="pointer-events-none absolute right-4 top-4 w-52 origin-top-right scale-95 rounded-xl border border-[#1a1a1a] bg-[#000000] p-3 text-xs text-[#c9c9c9] opacity-0 transition group-hover:scale-100 group-hover:opacity-100">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#ff4d22]">
          tooltip
        </div>
        <p className="mt-2 leading-relaxed">{skill.tooltip}</p>
      </div>
    </div>
  );
}
