"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TypingText from "@/components/TypingText";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <section className="mx-auto flex min-h-[80vh] w-full max-w-6xl flex-col items-start justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 rounded-full border border-[#1f2a20] bg-[#0f1410] px-4 py-2 text-xs uppercase tracking-[0.4em] text-[#8aa18a]"
        >
          <span className="text-[#4dff8a]">linux</span>
          <span className="text-[#ff2d55]">/</span>
          <span>devops</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-4xl font-semibold text-[#e6ffe9] md:text-6xl"
        >
          {profile.name}
        </motion.h1>
        <div className="mt-6 rounded-2xl border border-[#1f2a20] bg-[#0f1410] p-6 font-mono text-sm text-[#e6ffe9] neon-border">
          <div className="text-[#4dff8a]">
            <span className="text-[#ff2d55]">$</span> whoami
          </div>
          <div className="mt-3 text-[#8aa18a]">
            <TypingText text={`> ${profile.title}`} />
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#8aa18a]">
            <span>{profile.location}</span>
            <span className="text-[#ff2d55]">●</span>
            <span>Open to roles</span>
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#8aa18a] md:text-base">
          {profile.summary}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-full border border-[#4dff8a]/60 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#4dff8a] transition hover:bg-[#4dff8a] hover:text-[#0b0f0b]"
          >
            View Projects
          </Link>
          <a
            href="/resume.txt"
            className="rounded-full border border-[#ff2d55]/60 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#ff2d55] transition hover:bg-[#ff2d55] hover:text-[#0b0f0b]"
            download
          >
            Download Resume
          </a>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              label: "Systems",
              value: "Linux-native stack",
              detail: "Optimized for secure runtime environments.",
            },
            {
              label: "Delivery",
              value: "DevOps-first",
              detail: "CI/CD pipelines with auditability.",
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-[#1f2a20] bg-[#0f1410] p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#4dff8a]">
                {item.label}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-[#e6ffe9]">
                {item.value}
              </h3>
              <p className="mt-2 text-sm text-[#8aa18a]">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <motion.div
        whileHover={{ scale: 1.05, rotate: 1 }}
        aria-hidden
        className="absolute right-8 top-32 hidden h-72 w-72 rounded-full border border-[#ff2d55]/30 md:block"
        style={{ animation: "webPulse 6s ease-in-out infinite" }}
      >
        <div className="absolute inset-8 rounded-full border border-[#4dff8a]/20" />
        <div className="absolute inset-16 rounded-full border border-[#ff2d55]/20" />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#4dff8a]/10" />
        <div className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-[#ff2d55]/10" />
      </motion.div>
    </div>
  );
}
