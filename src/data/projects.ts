import audiophile from "../assets/images/projects/audiophile.png";
import kaffen from "../assets/images/projects/kaffen.png";
import jobspace from "../assets/images/projects/jobspace.png";
import space from "../assets/images/projects/space.png";
import bookmark from "../assets/images/projects/bookmark.png";
import loopstudios from "../assets/images/projects/loopstudios.png";
import room from "../assets/images/projects/room.png";
import entertainment from "../assets/images/projects/entertainment.png";

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
    description: `Audiophile is an ecommercce store for a fictional company, this is one of the challenges 
    from frontend mentor. The site allows you to view products, add them to the cart, increase and decrease
    their quantity as well as remove them from the cart. If you are satified with your order, you can procceed
    to the checkout page and upon filling in a form for aunthetication and payment, you will have a popup modal
    confirming your purchase.
    React with typescript was used to build this, with tailwind for styling, react router for routing and redux
    toolkit for managing state. This was my first time using redux toolkit and i learnt the basics. It was also 
    the first time i used the modal element built into html, i still have quiet a lot to learn about it but this
    experience gave me much.`,
  },

  {
    id: 740,
    name: "Movies Web App",
    imageUrl: entertainment,
    category: "Full Apps",
    client: "Personal",
    live: "https://movip.vercel.app",
    code: "https://github.com/mukwende2000/ewa",
    stack: "React, Typescript, Tailwind",
    description: `This is an entertainment web application that displays movies and give details about them, movies are 
    fetched from the tmdb api and displayed on the page based on the category, genre and others. Click on a movie to view
    its details including the cast, synopsis and many more.`,
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
    stack: "React, Typescript, Sass",
    description: `
    Built with React, Typescript and Sass, Kaffen takes you through the details of the company so named,
    there are two forms, one for contacting and another for making a reservation. These were implemented using 
    the react-hook-form library. Another library used was the Splide js library for the sliding contents.`,
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
    description: ` Job Space is a job board site for a fictional company that helps job
    seekers find work. Users can either go there to check if there are
    jobs they qualify for or sign and be able to post jobs in hopes of
    finding potential qualified individuals to fill their vacant
    positions.
    It was built with React with regular css was for styling. I
    implemented my own aunthetication logic since i had no knowledge of
    any BaaS by then. Routing was done using v6.4 of React Router Dom.`,
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
    description: `Space depicts a future journey to space, its another challenge from frontend mentor.
    With four pages, one for the destination, one for the crew member, one for the technology used and 
    the homepage, all pages have tabbed interfaces that show different stuff depending on the page you 
    are at. This was built yet again with react and typescript, utilizing tailwind for the styling and 
    react router dom for routing.
    `,
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
    id: 295,
    name: "loopstudios",
    imageUrl: loopstudios,
    category: "landing pages",
    client: "Personal",
    live: "https://loopstudios.vercel.app",
    code: "https://github.com/mukwende2000/loopstudios-landing-page-main",
    stack: "HTML, CSS, Javascript",
    description: ``,
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
];
export default projects;
