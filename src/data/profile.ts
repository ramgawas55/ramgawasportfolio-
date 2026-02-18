import {
  Experience,
  Project,
  SkillCategory,
  TerminalCommand,
  TimelineItem,
} from "@/types";

export const profile = {
  name: "Ram Sunil Gawas",
  title: "Aspiring DevOps & Linux System Engineer",
  location: "Mumbai, Maharashtra",
  email: "ramgawas55@gmail.com",
  summary:
    "Aspiring DevOps and Linux System Engineer with hands-on lab experience in Linux administration, AWS cloud services, Infrastructure as Code, and configuration management. Skilled in server deployment, automation, networking, security hardening, and troubleshooting with a foundation in system reliability and cloud infrastructure management.",
};

export const timeline: TimelineItem[] = [
  {
    timestamp: "2024-10-01 09:12:18",
    message: "Built Terraform configs for AWS EC2 provisioning and VPC rules.",
    level: "SUCCESS",
  },
  {
    timestamp: "2024-07-14 16:48:02",
    message: "Automated web server and firewall setup using Ansible playbooks.",
    level: "INFO",
  },
  {
    timestamp: "2023-08-21 11:30:45",
    message: "Configured AWS EC2, IAM policies, S3 buckets, and Apache/Nginx.",
    level: "SUCCESS",
  },
  {
    timestamp: "2023-06-12 08:20:09",
    message: "Completed Linux administration lab on CentOS/RHEL environments.",
    level: "WARN",
  },
];

export const philosophies: string[] = [
  "$ automate --repeatable",
  "$ harden --every-service",
  "$ monitor --everything",
  "$ validate --before-deploy",
  "$ document --for-clarity",
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Linux & DevOps",
    items: [
      {
        name: "Linux Administration",
        level: 90,
        tooltip:
          "User & group management, file permissions, ACLs, LVM, process & service management, cron jobs, package management, systemctl, journalctl",
      },
      {
        name: "Cloud (AWS)",
        level: 84,
        tooltip: "EC2, S3, IAM, security groups, key pairs",
      },
      {
        name: "Automation & Scripting",
        level: 82,
        tooltip: "Ansible, Terraform, Shell scripting (Bash), YAML",
      },
      {
        name: "Networking",
        level: 80,
        tooltip: "TCP/IP, UDP, DNS, DHCP, subnetting, VLANs, routing, SSH",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Web & Databases",
        level: 78,
        tooltip: "Apache, Nginx, MySQL, MongoDB",
      },
      {
        name: "Security",
        level: 78,
        tooltip: "firewalld, iptables, SSH hardening, SSL/TLS, OpenSSL",
      },
      {
        name: "File Services & Storage",
        level: 74,
        tooltip: "NFS, Samba, FTP, LVM",
      },
      {
        name: "Monitoring & Troubleshooting",
        level: 76,
        tooltip: "top, ps, sar, netstat/ss, systemctl, journalctl, logs",
      },
    ],
  },
  {
    title: "Frontend",
    items: [
      {
        name: "Version Control & CI/CD",
        level: 78,
        tooltip: "Git, GitHub, CI/CD fundamentals",
      },
      {
        name: "Virtualization",
        level: 74,
        tooltip: "VMware",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "AUTO PATCH",
    summary:
      "Centralized Linux patch management platform with agent polling, approvals, audit logs, and a clean dashboard.",
    stack: ["FastAPI", "PostgreSQL", "Next.js", "Docker", "Linux", "Python"],
    category: "DevOps",
    github: "https://github.com/ramgawas55/Auto-Patch.git",
    highlights: [
      "Built approvals workflow with audit logs and scheduling",
      "Agent checks in every minute to report patch status",
      "Render-ready deployment with Blueprint support",
    ],
  },
  {
    title: "SecureDistro (SentinelOS-Lite)",
    summary:
      "Linux-focused self-healing security stack with an agent, rule engine, anomaly detection, REST API, dashboard, CLI, and Telegram alerting.",
    stack: ["Linux", "Security", "Docker", "Node.js", "Next.js", "Python"],
    category: "DevOps",
    github: "https://github.com/ramgawas55/SecureDistro.git",
    highlights: [
      "Automated service recovery with rule-driven actions",
      "Shipped REST API with SQLite storage and token auth",
      "Built dashboard and CLI for operational workflows",
    ],
  },
  {
    title: "Linux Server Administration Lab",
    summary:
      "Hands-on lab focused on Linux user management, LVM, SSH hardening, CRON scheduling, and troubleshooting.",
    stack: ["Linux", "SSH", "CRON", "LVM", "CentOS/RHEL"],
    category: "Linux",
    github: "https://github.com/ramgawas55",
    highlights: [
      "Configured user permissions and secure access controls",
      "Automated routine jobs with CRON schedules",
      "Diagnosed service issues across lab nodes",
    ],
  },
  {
    title: "AWS Cloud Practice",
    summary:
      "Deployed EC2 instances, set up security groups, managed IAM policies, and configured S3 storage.",
    stack: ["AWS EC2", "S3", "IAM", "Apache", "Nginx"],
    category: "AWS",
    github: "https://github.com/ramgawas55",
    highlights: [
      "Provisioned web servers and deployed sample sites",
      "Hardened access with IAM and security groups",
      "Managed cloud storage buckets and policies",
    ],
  },
  {
    title: "Infrastructure Automation",
    summary:
      "Automated Linux server setup with Ansible and provisioned AWS resources using Terraform.",
    stack: ["Ansible", "Terraform", "Linux", "YAML", "AWS"],
    category: "AWS",
    github: "https://github.com/ramgawas55",
    highlights: [
      "Created playbooks for web/database installs",
      "Built Terraform templates for EC2 provisioning",
      "Applied infrastructure as code best practices",
    ],
  },
];

export const experience: Experience[] = [
  {
    role: "Practical Experience",
    company: "Linux & AWS Labs",
    period: "2023 — Present",
    location: "Mumbai",
    highlights: [
      "Performed Linux user management, package installations, and CRON scheduling.",
      "Configured AWS EC2 instances and deployed Apache/Nginx web servers.",
      "Created Terraform configurations and Ansible playbooks for automation.",
    ],
  },
  {
    role: "B.Sc. Information Technology",
    company: "Mumbai University",
    period: "2023 — 2025",
    location: "Mumbai",
    highlights: [
      "Focused on systems, networking, and cloud fundamentals.",
      "Applied lab knowledge to real-world Linux administration.",
    ],
  },
  {
    role: "Higher Secondary Education",
    company: "Maharashtra Board",
    period: "2020 — 2022",
    location: "Mumbai",
    highlights: [
      "Class XII: 59.33%",
      "Class X: 66.00%",
    ],
  },
];

export const terminalCommands: TerminalCommand[] = [
  {
    command: "help",
    output: [
      "Available commands:",
      "about   skills   projects   contact",
      "Use clear to reset the terminal.",
    ],
  },
  {
    command: "about",
    output: [
      profile.summary,
      "Focus: Linux administration, AWS cloud services, and automation.",
    ],
  },
  {
    command: "skills",
    output: [
      "Linux Administration: Users, permissions, ACLs, LVM, systemctl, journalctl",
      "Cloud (AWS): EC2, S3, IAM, security groups, key pairs",
      "Automation & Scripting: Ansible, Terraform, Bash, YAML",
      "Networking: TCP/IP, UDP, DNS, DHCP, VLANs, routing, SSH",
      "Web & Databases: Apache, Nginx, MySQL, MongoDB",
      "Security: firewalld, iptables, SSH hardening, SSL/TLS",
      "File Services & Storage: NFS, Samba, FTP, LVM",
      "Monitoring & Troubleshooting: top, ps, sar, netstat/ss, logs",
      "Version Control & CI/CD: Git, GitHub, CI/CD fundamentals",
      "Virtualization: VMware",
    ],
  },
  {
    command: "projects",
    output: [
      "AUTO PATCH — centralized Linux patch management",
      "SecureDistro (SentinelOS-Lite) — self-healing security stack",
      "Linux Server Administration Lab — core Linux workflows",
      "AWS Cloud Practice — EC2, S3, IAM deployment labs",
      "Infrastructure Automation — Ansible and Terraform",
    ],
  },
  {
    command: "contact",
    output: [
      "Email: ramgawas55@gmail.com",
      "Phone: +91-9324863145",
      "Location: Mumbai, Maharashtra",
    ],
  },
];
