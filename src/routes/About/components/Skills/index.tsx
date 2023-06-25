import { useContext } from "react";
import { skills } from "../../../../data/skill";
import ThemeContext from "../../../../contexts/ThemeContext";

function index() {
  const { theme } = useContext(ThemeContext);
  const borderColor =
    theme === "green"
      ? "border-theme1"
      : theme === "blue"
      ? "border-theme2"
      : "border-theme3";
  return (
    <section className="text-primary py-16">
      <h2 className="mb-16 text-4xl font-bold">SKILLS</h2>
      <div>
        <h3 className="text-2xl font-bold">Fundamentals</h3>
        <ul className="md:grid grid-cols-3 gap-10">
          {skills.map((skill) => {
            if (skill.category === "fundamental") {
              return (
                <li
                  key={skill.name}
                  className={`uppercase font-light mt-7 first:mt-0 md:first:mt-7 py-1 border-b ${borderColor}`}
                >
                  {skill.name}
                </li>
              );
            }
          })}
        </ul>
      </div>

      <div className="my-16">
        <h3 className="text-2xl font-bold">My Tech Stack</h3>
        <ul className="md:grid grid-cols-3 gap-10">
          {skills.map((skill) => {
            if (skill.category === "stack") {
              return (
                <li
                  key={skill.name}
                  className={`uppercase font-light mt-7 first:mt-0 md:first:mt-7 py-1 border-b ${borderColor}`}
                >
                  {skill.name}
                </li>
              );
            }
          })}
        </ul>
      </div>

      <div className="my-16">
        <h3 className="text-2xl font-bold">Currently Learning...</h3>
        <ul className="md:grid grid-cols-3 gap-10">
          {skills.map((skill) => {
            if (skill.category === "learning") {
              return (
                <li
                  key={skill.name}
                  className={`uppercase font-light mt-7 first:mt-0 md:first:mt-7 py-1 border-b ${borderColor}`}
                >
                  {skill.name}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
}

export default index;
