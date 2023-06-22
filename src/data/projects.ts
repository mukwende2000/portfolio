interface Project {
  name: string;
  client: string;
  code: string;
  live: string;
  stack: string;
  description: string;
  category: string;
}

const projects: Project[] = [
  {
    name: "Audiophile",
    category: "Full Apps",
    client: "Personal",
    live: "https://audphil.vercel.app",
    code: "https://github.com/mukwende2000/audiophile",
    stack: "React, Typescript, Tailwind",
    description: "",
  },
  {
    name: "Kaffen",
    category: "Full Apps",
    client: "Personal",
    live: "https://kaffen.vercel.app",
    code: "https://github.com/mukwende2000/kaffen",
    stack: "React, Typescript, Tailwind",
    description: "",
  },
  {
    name: "Space Tourism",
    category: "Full Apps",
    client: "Personal",
    live: "https://space10.vercel.app",
    code: "https://github.com/mukwende2000/space",
    stack: "React, Typescript, Tailwind",
    description: "",
  },
  {
    name: "Job Space",
    category: "Full Apps",
    client: "Personal",
    live: "https://jobspace.vercel.app",
    code: "https://github.com/mukwende2000/jobspace",
    stack: "React, Javascript, CSS",
    description: "",
  },
];
export default projects;
