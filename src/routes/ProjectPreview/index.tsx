import { FaCode, FaLink, FaTimes } from "react-icons/fa";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import { useParams } from "react-router-dom";
import projects from "../../data/projects";

function index() {
  const param = useParams();
  const project = projects.find((project) => project.name === param.id);
  const { textColor } = useContext(ThemeContext);
  return (
    <div className={`p-5 w-full md:w-6/12 m-auto duration-500`}>
      <div className="overflow-hidden rounded-lg">
        <img src={project?.imageUrl} alt={`${project?.name} screenshot`} />
      </div>
      <div className="basis-full">
        <h3 className={`${textColor} my-5 text-3xl font-bold`}>
          {project?.name}
        </h3>

        <ul className="text-primary">
          <li>
            <span className="font-light">Project: </span>
            <span>{project?.name}</span>
          </li>
          <li className="my-3">
            <span className="font-light">Client: </span>
            <span>{project?.client}</span>
          </li>
          <li>
            <span className="font-light">Tech Stack: </span>
            <span>{project?.stack}</span>
          </li>
        </ul>
        <p className="font-light text-gray-300 my-5">{project?.description}</p>

        <div className="text-gray-400 flex gap-10 my-5">
          <a
            href={project?.code}
            target=">blank"
            className="flex items-center gap-4 text-lg hover:underline p-2"
          >
            <FaLink className="relative z-10" />
            <span className="relative z-10">View Code</span>
          </a>
          <a
            href={project?.live}
            target=">blank"
            className="flex items-center gap-4 text-lg hover:underline p-2"
          >
            <FaCode className="relative z-10" />
            <span className="relative z-10">See Live</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default index;
