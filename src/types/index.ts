export type TimelineItem = {
  timestamp: string;
  message: string;
  level: "INFO" | "WARN" | "SUCCESS";
};

export type SkillItem = {
  name: string;
  level: number;
  tooltip: string;
};

export type SkillCategory = {
  title: string;
  items: SkillItem[];
};

export type ProjectCategory = "Linux" | "AWS" | "DevOps";

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  category: ProjectCategory;
  github: string;
  live?: string;
  highlights: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

export type TerminalCommand = {
  command: string;
  output: string[];
};
