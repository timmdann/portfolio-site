export type SkillCategory = "frontend" | "backend" | "tools";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export const skills: Skill[] = [
  // Frontend
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "HTML / CSS", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "TanStack Query", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "shadcn/ui", category: "frontend" },
  { name: "Material UI", category: "frontend" },

  // Backend & Databases
  { name: "Node.js", category: "backend" },
  { name: "Nest.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "Prisma", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Redis", category: "backend" },
  { name: "RabbitMQ", category: "backend" },
  { name: "Supabase", category: "backend" },

  // DevOps & Tools
  { name: "Docker", category: "tools" },
  { name: "Kubernetes", category: "tools" },
  { name: "Git / GitHub", category: "tools" },
  { name: "Linux", category: "tools" },
];

export const skillCategories = ["all", "frontend", "backend", "tools"] as const;
export type SkillFilter = (typeof skillCategories)[number];
