import { TimelineItem } from "@/types";

const levelColors: Record<TimelineItem["level"], string> = {
  INFO: "text-[#4dff8a]",
  WARN: "text-[#ffb347]",
  SUCCESS: "text-[#ff2d55]",
};

export default function TimelineLog({ item }: { item: TimelineItem }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-[#1f2a20] bg-[#0f1410] p-4 font-mono text-sm">
      <div className="flex flex-col text-xs uppercase tracking-[0.2em] text-[#8aa18a]">
        <span>{item.timestamp}</span>
        <span className={levelColors[item.level]}>{item.level}</span>
      </div>
      <p className="text-[#e6ffe9]">{item.message}</p>
    </div>
  );
}
