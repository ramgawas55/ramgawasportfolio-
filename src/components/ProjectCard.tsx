import { Project } from "@/types";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 160, damping: 14 }}
      className="group flex h-full flex-col rounded-3xl border border-[#1f2a20] bg-[#0f1410] p-6"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff2d55]">
            {project.category}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-[#e6ffe9]">
            {project.title}
          </h3>
        </div>
        <div className="h-12 w-12 rounded-full border border-[#1f2a20] bg-[#121a14] text-center font-mono text-xs leading-[3rem] text-[#4dff8a]">
          CLI
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[#8aa18a]">
        {project.summary}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((stack) => (
          <span
            key={stack}
            className="rounded-full border border-[#1f2a20] px-3 py-1 text-xs text-[#4dff8a]"
          >
            {stack}
          </span>
        ))}
      </div>
      <ul className="mt-5 space-y-2 text-sm text-[#e6ffe9]">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-[#ff2d55]">●</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-3 pt-6 text-xs uppercase tracking-[0.3em]">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[#4dff8a]/60 px-4 py-2 text-[#4dff8a] transition hover:bg-[#4dff8a] hover:text-[#0b0f0b]"
        >
          GitHub
        </a>
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#ff2d55]/60 px-4 py-2 text-[#ff2d55] transition hover:bg-[#ff2d55] hover:text-[#0b0f0b]"
          >
            Live
          </a>
        ) : null}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 rounded-3xl border border-[#ff2d55]/40" />
      </div>
    </motion.article>
  );
}
