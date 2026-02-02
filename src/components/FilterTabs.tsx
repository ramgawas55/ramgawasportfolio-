"use client";

import { ProjectCategory } from "@/types";

const filters: (ProjectCategory | "All")[] = ["All", "Linux", "AWS", "DevOps"];

export default function FilterTabs({
  active,
  onChange,
}: {
  active: ProjectCategory | "All";
  onChange: (value: ProjectCategory | "All") => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition ${
            active === filter
              ? "border-[#ff2d55] bg-[#ff2d55] text-[#0b0f0b]"
              : "border-[#1f2a20] text-[#8aa18a] hover:border-[#4dff8a] hover:text-[#4dff8a]"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
