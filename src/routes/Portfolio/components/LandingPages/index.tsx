import { useContext } from "react";
import projects from "../../../../data/projects";
import ThemeContext from "../../../../contexts/ThemeContext";
import PortfolioContext from "../../../../contexts/PortfolioContext";

function index() {
  const { backgroundColor } = useContext(ThemeContext);
  const { setAsideIsOpen, setProject } = useContext(PortfolioContext);

  function handleClick(id: number): void {
    projects.map((project) => {
      if (project.id === id) {
        setProject && setProject(project);
      }
    });
    setAsideIsOpen && setAsideIsOpen(true);
  }
  return (
    <div className="my-10">
      <h2 className="text-2xl text-primary mb-5">Landing Pages</h2>
      <ul className="md:grid grid-cols-3 gap-5">
        {projects.map((project) => {
          if (project.category === "landing pages") {
            return (
              <li>
                <button
                  onClick={() => handleClick(project.id)}
                  className="relative"
                >
                  <span
                    className={`text-primary font-bold text-3xl absolute left-0 right-0 top-0 bottom-0 grid place-items-center opacity-100 hover:opacity-0 ${backgroundColor} duration-200`}
                  >
                    {project.name}
                  </span>
                  <img
                    src={project.imageUrl}
                    alt={`${project.name} screenshot`}
                  />
                </button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default index;
