import { Project } from "@/types";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 160, damping: 14 }}
      className="group flex h-full flex-col rounded-3xl border border-[#1a1a1a] bg-[#050505] p-6"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff4d22]">
            {project.category}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-[#ffffff]">
            {project.title}
          </h3>
        </div>
        <div className="h-12 w-12 rounded-full border border-[#1a1a1a] bg-[#0d0d0d] text-center font-mono text-xs leading-[3rem] text-[#ff3b30]">
          CLI
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[#c9c9c9]">
        {project.summary}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((stack) => (
          <span
            key={stack}
            className="rounded-full border border-[#1a1a1a] px-3 py-1 text-xs text-[#ff3b30]"
          >
            {stack}
          </span>
        ))}
      </div>
      <ul className="mt-5 space-y-2 text-sm text-[#ffffff]">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-[#ff3b30]">●</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-3 pt-6 text-xs uppercase tracking-[0.3em]">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[#ff3b30]/70 px-4 py-2 text-[#ff3b30] transition hover:bg-[#ff3b30] hover:text-[#000000]"
        >
          GitHub
        </a>
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#ff4d22]/70 px-4 py-2 text-[#ff4d22] transition hover:bg-[#ff4d22] hover:text-[#000000]"
          >
            Live
          </a>
        ) : null}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 rounded-3xl border border-[#ff3b30]/40" />
      </div>
    </motion.article>
  );
}
