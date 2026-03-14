export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Restaurant Page",
    description: "A beautiful restaurant page app using React and Tailwind.",
    image: "/project-1.png",
    tags: ["React", "TailwindCSS", "TypeScript"],
    demoUrl: "https://qitchen-restaurant-site.vercel.app/",
    githubUrl: "https://github.com/timmdann/qitchen-restaurant-site",
  },
  {
    id: 2,
    title: "Soon...",
    description: "",
    image: "/project-2.png",
    tags: [],
  },
  {
    id: 3,
    title: "Soon...",
    description: "",
    image: "/project-3.png",
    tags: [],
  },
];
