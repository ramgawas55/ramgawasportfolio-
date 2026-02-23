import { TimelineItem } from "@/types";

const levelColors: Record<TimelineItem["level"], string> = {
  INFO: "text-[#ff3b30]",
  WARN: "text-[#ff4d22]",
  SUCCESS: "text-[#d63d28]",
};

export default function TimelineLog({ item }: { item: TimelineItem }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-[#1a1a1a] bg-[#050505] p-4 font-mono text-sm">
      <div className="flex flex-col text-xs uppercase tracking-[0.2em] text-[#c9c9c9]">
        <span>{item.timestamp}</span>
        <span className={levelColors[item.level]}>{item.level}</span>
      </div>
      <p className="text-[#ffffff]">{item.message}</p>
    </div>
  );
}
