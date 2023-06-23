import { FaCode, FaLink, FaTimes } from "react-icons/fa";
import { Project } from "../../../../data/projects";
import { useContext, useState } from "react";
import ThemeContext from "../../../../contexts/ThemeContext";
import PortfolioContext from "../../../../contexts/PortfolioContext";

function index() {
  const { textColor } = useContext(ThemeContext);
  const { asideIsOpen, project, setAsideIsOpen } = useContext(PortfolioContext);
  return (
    <aside
      className={`bg-gray-500 p-5 fixed z-10 h-screen ${
        asideIsOpen ? "right-0" : "-right-[100%]"
      } 0 w-[50%] duration-500`}
    >
      <div className="overflow-hidden rounded-lg">
        <img src={project?.imageUrl} alt={`${project?.name} screenshot`} />
      </div>
      <div className="flex justify-between pr-60 py-10">
        <h3 className={`${textColor} text-3xl font-bold`}>{project.name}</h3>
        <button
          onClick={() => setAsideIsOpen && setAsideIsOpen(false)}
          className={`flex items-center ${textColor} text-xl font-bold border rounded-full px-4`}
        >
          <FaTimes />
          <span>CLOSE</span>
        </button>
      </div>
      <ul className="text-primary">
        <li className="text-lg">
          <span className="font-light">Project: </span>
          <span>{project.name}</span>
        </li>
        <li className="my-5 text-lg">
          <span className="font-light">Client: </span>
          <span>{project.client}</span>
        </li>
        <li className="text-lg">
          <span className="font-light">Tech Stack: </span>
          <span>{project.stack}</span>
        </li>
      </ul>
      <div className="text-gray-800 flex gap-10 my-5">
        <a
          href={project.code}
          target=">blank"
          className="flex items-center gap-4 text-xl hover:underline border rounded-full p-2"
        >
          <FaLink className="relative z-10" />
          <span className="relative z-10">View Code</span>
        </a>
        <a
          href={project.live}
          target=">blank"
          className="flex items-center gap-4 text-xl hover:underline border rounded-full p-2"
        >
          <FaCode className="relative z-10" />
          <span className="relative z-10">See Live</span>
        </a>
      </div>
    </aside>
  );
}

export default index;
