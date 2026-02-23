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
          className="inline-flex items-center gap-3 rounded-full border border-[#1a1a1a] bg-[#050505] px-4 py-2 text-xs uppercase tracking-[0.4em] text-[#c9c9c9]"
        >
          <span className="text-[#ff3b30]">linux</span>
          <span className="text-[#ff4d22]">/</span>
          <span>devops</span>
        </motion.div>
        <motion.h1
          className="mt-6 text-4xl font-semibold text-[#ffffff] md:text-6xl"
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.98,
            filter: "blur(4px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            boxShadow: [
              "0 0 10px rgba(255, 59, 48, 0.18)",
              "0 0 8px rgba(255, 59, 48, 0.08)",
              "0 0 0 rgba(255, 59, 48, 0)",
            ],
          }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 1.4,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.25,
          }}
        >
          {profile.name}
        </motion.h1>
        <div className="mt-6 rounded-2xl border border-[#1a1a1a] bg-[#050505] p-6 font-mono text-sm text-[#ffffff] neon-border">
          <div className="text-[#ff3b30]">
            <span className="text-[#ff4d22]">$</span> whoami
          </div>
          <div className="mt-3 text-[#c9c9c9]">
            <TypingText text={`> ${profile.title}`} />
          </div>
          <div className="mt-2 text-xs uppercase tracking-[0.3em] text-[#ff4d22]">
            {profile.subtitle}
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#c9c9c9]">
            <span>{profile.location}</span>
            <span className="text-[#ff3b30]">●</span>
            <span>Open to opportunities</span>
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#c9c9c9] md:text-base">
          {profile.intro}
        </p>
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
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-full border border-[#ff3b30]/70 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#ff3b30] transition hover:bg-[#ff3b30] hover:text-[#000000]"
          >
            View Projects
          </Link>
          <a
            href="/api/resume"
            className="rounded-full border border-[#ff4d22]/70 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#ff4d22] transition hover:bg-[#ff4d22] hover:text-[#000000]"
            download
          >
            Download Resume
          </a>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              label: "Infrastructure",
              value: "Linux-first operations",
              detail: "Secure, stable, and observable systems.",
            },
            {
              label: "Automation",
              value: "IaC and config management",
              detail: "Terraform + Ansible workflows at scale.",
            },
            {
              label: "Delivery",
              value: "CI/CD reliability",
              detail: "GitHub Actions and repeatable deployments.",
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-[#1a1a1a] bg-[#050505] p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff3b30]">
                {item.label}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-[#ffffff]">
                {item.value}
              </h3>
              <p className="mt-2 text-sm text-[#c9c9c9]">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <motion.div
        whileHover={{ scale: 1.05, rotate: 1 }}
        aria-hidden
        className="absolute right-8 top-32 hidden h-72 w-72 rounded-full border border-[#ff4d22]/30 md:block"
        style={{ animation: "webPulse 6s ease-in-out infinite" }}
      >
        <div className="absolute inset-8 rounded-full border border-[#ff3b30]/20" />
        <div className="absolute inset-16 rounded-full border border-[#ff4d22]/20" />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#ff3b30]/10" />
        <div className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-[#ff4d22]/10" />
      </motion.div>
    </div>
  );
}
