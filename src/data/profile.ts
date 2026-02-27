import {
  Education,
  Experience,
  Project,
  SkillCategory,
  TerminalCommand,
  TimelineItem,
} from "@/types";

export const profile = {
  name: "Ram Sunil Gawas",
  title: "Linux System Administrator & DevOps Engineer (vibe coder)",
  subtitle:
    "DevOps & Cloud Engineer focused on building secure, scalable, and automated infrastructure.",
  intro:
    "Hands-on with Linux server administration, AWS EC2/S3/IAM, Terraform (Infrastructure-as-Code), Ansible automation, CI/CD pipelines using GitHub Actions, web server deployment, and cloud-based provisioning. I enjoy solving real infrastructure problems and automating everything I can.",
  location: "Mumbai, Maharashtra, India",
  email: "ramgawas55@gmail.com",
  phone: "+91-9324863145",
  linkedin: "https://www.linkedin.com/in/ram-gawas-2215a12a7/",
  github: "https://github.com/ramgawas55",
  summary:
    "I’m a Linux System Administrator and aspiring DevOps Engineer with experience in deploying and managing Linux servers, building AWS cloud infrastructure (EC2, S3, IAM), writing TerraformIaC configurations, automating provisioning with Ansible, and implementing CI/CD pipelines using GitHub Actions. I enjoy working close to the OS, securing systems, and building automated infrastructure.",
  badges: [
    "Linux & Server Administration",
    "AWS · Terraform · Ansible",
    "CI/CD · GitHub Actions · Automation",
  ],
};

export const timeline: TimelineItem[] = [
  {
    timestamp: "2024-11-18 10:14:22",
    message: "Provisioned AWS EC2 instances with Terraform modules and IAM roles.",
    level: "SUCCESS",
  },
  {
    timestamp: "2024-09-07 14:03:51",
    message: "Automated Nginx, Apache, MySQL, and firewall setup using Ansible.",
    level: "INFO",
  },
  {
    timestamp: "2024-06-22 08:32:10",
    message: "Built CI/CD pipelines with GitHub Actions and Nginx reverse proxy.",
    level: "SUCCESS",
  },
  {
    timestamp: "2024-04-02 09:12:05",
    message: "Hardened Linux servers with SSH, firewalld, and SSL/TLS configs.",
    level: "INFO",
  },
];

export const philosophies: string[] = [
  "$ automate --repeatable",
  "$ secure --by-default",
  "$ monitor --everything",
  "$ ship --with-confidence",
  "$ document --for-clarity",
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Linux & Server Administration",
    items: [
      {
        name: "Linux (RHEL, CentOS, Ubuntu)",
        level: 92,
        tooltip:
          "User/group management, permissions, services, package management",
      },
      {
        name: "Shell Scripting",
        level: 82,
        tooltip: "Bash automation for provisioning and maintenance tasks",
      },
      {
        name: "Nginx",
        level: 80,
        tooltip: "Reverse proxy, static hosting, TLS configuration",
      },
      {
        name: "Apache",
        level: 78,
        tooltip: "Virtual hosts, modules, and server hardening",
      },
      {
        name: "Systemd (systemctl, journalctl)",
        level: 84,
        tooltip: "Service management, logging, and troubleshooting",
      },
      {
        name: "LVM",
        level: 76,
        tooltip: "Logical volume management and storage layouts",
      },
      {
        name: "NFS",
        level: 74,
        tooltip: "Shared storage and exports management",
      },
      {
        name: "Samba",
        level: 72,
        tooltip: "SMB file sharing in mixed environments",
      },
      {
        name: "Process & Network Tools",
        level: 78,
        tooltip: "top, ps, netstat, ss for diagnostics",
      },
    ],
  },
  {
    title: "Cloud & Automation",
    items: [
      {
        name: "AWS (EC2, S3, IAM)",
        level: 84,
        tooltip: "Compute, storage, IAM, and security groups",
      },
      {
        name: "Terraform",
        level: 80,
        tooltip: "Infrastructure as Code for repeatable provisioning",
      },
      {
        name: "Ansible",
        level: 82,
        tooltip: "Automated server provisioning and configuration",
      },
      {
        name: "GitHub Actions",
        level: 78,
        tooltip: "CI/CD workflows and deployment automation",
      },
      {
        name: "Git",
        level: 80,
        tooltip: "Version control for infrastructure and apps",
      },
      {
        name: "GitHub",
        level: 78,
        tooltip: "Repo management, collaboration, and CI tooling",
      },
      {
        name: "YAML",
        level: 76,
        tooltip: "Configuration for CI/CD and automation",
      },
    ],
  },
  {
    title: "Networking & Security",
    items: [
      {
        name: "TCP/IP",
        level: 80,
        tooltip: "Networking fundamentals and troubleshooting",
      },
      {
        name: "SSH",
        level: 82,
        tooltip: "Secure remote access and hardening",
      },
      {
        name: "DNS",
        level: 76,
        tooltip: "Name resolution and record management",
      },
      {
        name: "DHCP",
        level: 74,
        tooltip: "Network address assignment and configuration",
      },
      {
        name: "Firewalld",
        level: 76,
        tooltip: "Firewall zones, rules, and service access",
      },
      {
        name: "iptables",
        level: 76,
        tooltip: "Rule-based packet filtering",
      },
      {
        name: "SSL/TLS",
        level: 78,
        tooltip: "Certificate management and secure transport",
      },
      {
        name: "OpenSSL",
        level: 74,
        tooltip: "Certificate tooling and encryption basics",
      },
    ],
  },
  {
    title: "Databases & Virtualization",
    items: [
      {
        name: "MySQL",
        level: 74,
        tooltip: "Schema setup, users, backups, and tuning",
      },
      {
        name: "MongoDB",
        level: 72,
        tooltip: "Collections, users, and basic administration",
      },
      {
        name: "VMware Workstation",
        level: 72,
        tooltip: "Local virtualization and lab environments",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "SecureDistro (SentinelOS-Lite)",
    summary:
      "Self-healing Linux security system with agent-based monitoring, rule engine automation, anomaly detection, REST API, SQLite, dashboard, CLI, and Docker support.",
    stack: ["Linux", "Python", "Node.js", "SQLite", "Docker", "Next.js"],
    category: "DevOps",
    github: "https://github.com/ramgawas55/SecureDistro",
    highlights: [
      "Agent-based security telemetry with rule-driven remediation",
      "REST API + CLI for operational workflows and visibility",
      "Dashboard for anomaly insights and incident tracking",
    ],
  },
  {
    title: "Learn-with-Linux (LinuxLab Academy)",
    summary:
      "Demon Slayer–themed Linux learning platform with lessons, labs, progress tracking, PostgreSQL, Prisma, JWT auth, and a Next.js 14 UI.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "JWT", "TypeScript", "Tailwind"],
    category: "Web",
    github: "https://github.com/ramgawas55/Learn-with-Linux",
    highlights: [
      "Lesson and lab modules with gated progress tracking",
      "Secure authentication with JWT and Prisma",
      "Immersive UI with themed content and dashboards",
    ],
  },
  {
    title: "Linux x DevOps Portfolio",
    summary:
      "Terminal-inspired portfolio with motion UI, Telegram alerts, and a dedicated resume route.",
    stack: ["Next.js", "TailwindCSS", "Framer Motion", "TypeScript"],
    category: "Web",
    github: "https://github.com/ramgawas55/ramgawasportfolio-",
    highlights: [
      "Terminal-styled sections and animated navigation",
      "Integrated contact form with Telegram notifications",
      "Resume download route and engagement tracking",
    ],
  },
  {
    title: "Demon Slayer Character Vault",
    summary:
      "Character showcase with admin upload flows, motion UI, and responsive galleries.",
    stack: ["Next.js", "TailwindCSS", "Framer Motion"],
    category: "Web",
    github: "https://github.com/ramgawas55/demon-slayer-character-vault",
    highlights: [
      "Admin upload system for character entries",
      "Animated character cards and dynamic layouts",
      "Responsive showcase optimized for mobile",
    ],
  },
  {
    title: "Auto-Patch",
    summary:
      "Centralized Linux patching system for automated multi-server updates via SSH.",
    stack: ["Python", "FastAPI", "Linux", "SSH", "PostgreSQL", "Docker"],
    category: "DevOps",
    github: "https://github.com/ramgawas55/Auto-Patch",
    highlights: [
      "Centralized approvals, audit logs, and scheduling",
      "Agent polling and patch compliance reporting",
      "Multi-server rollout with rollback readiness",
    ],
  },
  {
    title: "DeployPulse",
    summary:
      "CI/CD deployment status visualization dashboard for pipeline observability.",
    stack: ["Next.js", "Node.js", "GitHub Actions", "API", "Charts"],
    category: "DevOps",
    github: "https://github.com/ramgawas55/DeployPulse",
    highlights: [
      "Pipeline status cards with real-time updates",
      "Deployment timelines and release health views",
      "Metrics for failed, pending, and successful runs",
    ],
  },
];

export const experience: Experience[] = [
  {
    role: "AWS Cloud Infrastructure Deployment",
    company: "Hands-on Labs",
    period: "2024 — Present",
    location: "Mumbai",
    highlights: [
      "Launched EC2 Linux instances and configured security groups and SSH.",
      "Managed IAM roles and policies with least-privilege access control.",
      "Created S3 buckets and deployed Nginx/Apache web servers.",
    ],
  },
  {
    role: "Automated Linux Provisioning with Ansible",
    company: "Infrastructure Automation Labs",
    period: "2024",
    location: "Mumbai",
    highlights: [
      "Automated installation/configuration of Nginx, Apache, and MySQL.",
      "Implemented firewall rules and service hardening via playbooks.",
      "Reduced manual setup time by 70% using repeatable automation.",
    ],
  },
  {
    role: "CI/CD Pipeline Deployment (GitHub Actions)",
    company: "DevOps Practice",
    period: "2024",
    location: "Mumbai",
    highlights: [
      "Automated build and deployment workflows with GitHub Actions.",
      "Set up Nginx reverse proxy for consistent deployments.",
      "Improved deployment reliability with standardized pipelines.",
    ],
  },
  {
    role: "Infrastructure Provisioning with Terraform",
    company: "IaC Practice",
    period: "2024",
    location: "Mumbai",
    highlights: [
      "Provisioned EC2 instances using Infrastructure as Code.",
      "Created modular Terraform configurations for reuse.",
      "Managed security groups and networking in code.",
    ],
  },
];

export const education: Education[] = [
  {
    program: "B.Sc IT – Mumbai University",
    institution: "Mumbai University",
    period: "2023–2025",
    score: "CGPA: 6.35",
  },
  {
    program: "Class XII – Maharashtra Board",
    institution: "Maharashtra Board",
    period: "2020",
    score: "66%",
  },
  {
    program: "Class X – Maharashtra Board",
    institution: "Maharashtra Board",
    period: "2022",
    score: "59.33%",
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
      "Focus: Linux administration, AWS infrastructure, automation, and CI/CD.",
    ],
  },
  {
    command: "skills",
    output: [
      "Linux Administration: Users, permissions, ACLs, LVM, systemctl, journalctl",
      "Cloud (AWS): EC2, S3, IAM",
      "Automation: Terraform, Ansible, Bash, YAML",
      "CI/CD: GitHub Actions, Git, GitHub",
      "Networking: TCP/IP, DNS, DHCP, SSH",
      "Security: firewalld, iptables, SSL/TLS, OpenSSL",
      "Servers: Nginx, Apache, MySQL, MongoDB",
      "Storage: NFS, Samba, LVM",
      "Observability: top, ps, netstat, journalctl, systemctl",
    ],
  },
  {
    command: "projects",
    output: [
      "SecureDistro — self-healing Linux security stack",
      "Learn-with-Linux — Linux learning platform",
      "Linux x DevOps Portfolio — terminal-inspired portfolio",
      "Demon Slayer Character Vault — animated showcase",
      "Auto-Patch — centralized Linux patching",
      "DeployPulse — CI/CD deployment dashboard",
    ],
  },
  {
    command: "contact",
    output: [
      "Email: ramgawas55@gmail.com",
      "Phone: +91-9324863145",
      "Location: Mumbai, Maharashtra, India",
    ],
  },
];
