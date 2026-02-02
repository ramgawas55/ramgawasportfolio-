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
        level: 88,
        tooltip: "Users, permissions, LVM, SSH, CRON, package management",
      },
      {
        name: "AWS Core",
        level: 82,
        tooltip: "EC2, S3, IAM, security groups, and basic cloud ops",
      },
      {
        name: "Ansible",
        level: 80,
        tooltip: "Playbooks for web server setup and configuration management",
      },
      {
        name: "Terraform",
        level: 78,
        tooltip: "Infrastructure as Code for AWS provisioning",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Shell Scripting",
        level: 84,
        tooltip: "Automation scripts and task orchestration",
      },
      {
        name: "Security Hardening",
        level: 76,
        tooltip: "Firewall rules, SSL/TLS, OpenSSL, and access controls",
      },
      {
        name: "Monitoring",
        level: 74,
        tooltip: "top, ps, netstat, journalctl, systemctl",
      },
      {
        name: "Networking",
        level: 78,
        tooltip: "TCP/IP, DNS, DHCP, SSH, VLAN, subnetting basics",
      },
    ],
  },
  {
    title: "Frontend",
    items: [
      {
        name: "Web Servers",
        level: 82,
        tooltip: "Apache and Nginx setup, tuning, and maintenance",
      },
      {
        name: "Version Control",
        level: 80,
        tooltip: "Git and GitHub workflows",
      },
      {
        name: "Virtualization",
        level: 72,
        tooltip: "VMware setup and lab environment management",
      },
      {
        name: "File Services",
        level: 70,
        tooltip: "NFS and Samba sharing fundamentals",
      },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        name: "MySQL",
        level: 76,
        tooltip: "Database setup, access control, and backups",
      },
      {
        name: "MongoDB",
        level: 72,
        tooltip: "Collections, indexing basics, and CRUD",
      },
      {
        name: "Database Security",
        level: 70,
        tooltip: "User roles, permissions, and access policies",
      },
    ],
  },
];

export const projects: Project[] = [
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
    category: "DevOps",
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
      "Linux & DevOps: Linux Admin, AWS EC2/S3, Ansible, Terraform",
      "Backend: Shell, Security, Monitoring, Networking",
      "Frontend: Apache, Nginx, Git, VMware",
      "Databases: MySQL, MongoDB",
    ],
  },
  {
    command: "projects",
    output: [
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
