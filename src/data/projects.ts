import audiophile from "../assets/images/projects/audiophile.png";
import kaffen from "../assets/images/projects/kaffen.png";
import jobspace from "../assets/images/projects/jobspace.png";
import space from "../assets/images/projects/space.png";
import bookmark from "../assets/images/projects/bookmark.png";
import manage from "../assets/images/projects/manage.png";
import loopstudios from "../assets/images/projects/loopstudios.png";
import room from "../assets/images/projects/room.png";
import sunnyside from "../assets/images/projects/sunnyside.png";

export interface Project {
  id: number;
  name: string;
  imageUrl: string;
  client: string;
  code: string;
  live: string;
  stack: string;
  description: string;
  category: string;
  current?: boolean;
}

const projects: Project[] = [
  {
    id: 324,
    name: "Audiophile",
    imageUrl: audiophile,
    category: "Full Apps",
    client: "Personal",
    live: "https://audphil.vercel.app",
    code: "https://github.com/mukwende2000/audiophile",
    stack: "React, Typescript, Tailwind",
    description: "",
    current: true,
  },
  {
    id: 859,
    name: "Kaffen",
    imageUrl: kaffen,
    category: "Full Apps",
    client: "Personal",
    live: "https://kaffen.vercel.app",
    code: "https://github.com/mukwende2000/photom",
    stack: "React, Typescript, Tailwind",
    description: "",
  },
  {
    id: 153,
    name: "Job Space",
    imageUrl: jobspace,
    category: "Full Apps",
    client: "Personal",
    live: "https://jobspace.vercel.app",
    code: "https://github.com/mukwende2000/jobspace",
    stack: "React, Javascript, CSS",
    description: "",
  },
  {
    id: 296,
    name: "Space Tourism",
    imageUrl: space,
    category: "Full Apps",
    client: "Personal",
    live: "https://space10.vercel.app",
    code: "https://github.com/mukwende2000/space-tourism",
    stack: "React, Typescript, Tailwind",
    description: "",
  },
  {
    id: 106,
    name: "Bookmark",
    imageUrl: bookmark,
    category: "landing pages",
    client: "Personal",
    live: "https://bookmark-five-chi.vercel.app",
    code: "https://github.com/mukwende2000/bookmark",
    stack: "React, Typescript, Tailwind",
    description: "",
  },
  {
    id: 896,
    name: "Manage",
    imageUrl: manage,
    category: "landing pages",
    client: "Personal",
    live: "https://manage.vercel.app",
    code: "https://github.com/mukwende2000/manage",
    stack: "React, Javascript, CSS",
    description: "",
  },
  {
    id: 295,
    name: "loopstudios",
    imageUrl: loopstudios,
    category: "landing pages",
    client: "Personal",
    live: "https://loopstudios.vercel.app",
    code: "https://github.com/mukwende2000/loopstudios-landing-page-main",
    stack: "HTML, CSS, Javascript",
    description: "",
  },
  {
    id: 908,
    name: "Room",
    imageUrl: room,
    category: "landing pages",
    client: "Personal",
    live: "https://room11.vercel.app",
    code: "https://github.com/mukwende2000/room-homepage-master",
    stack: "HTML, CSS, Javascript",
    description: "",
  },
  {
    id: 453,
    name: "Sunnyside",
    imageUrl: sunnyside,
    category: "landing pages",
    client: "Personal",
    live: "https://sunnyside11.vercel.app",
    code: "https://github.com/mukwende2000/Sunnyside-landing",
    stack: "HTML, CSS, Javascript",
    description: "",
  },
];
export default projects;
