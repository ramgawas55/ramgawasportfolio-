"use client";

import { ProjectCategory } from "@/types";

const filters: (ProjectCategory | "All")[] = [
  "All",
  "Linux",
  "AWS",
  "DevOps",
  "Web",
];

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
              ? "border-[#ff3b30] bg-[#ff3b30] text-[#000000]"
              : "border-[#1a1a1a] text-[#c9c9c9] hover:border-[#ff4d22] hover:text-[#ff4d22]"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
