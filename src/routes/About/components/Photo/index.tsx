import home from "../../../../assets/images/home.jpg";
import { useContext } from "react";
import ThemeContext from "../../../../contexts/ThemeContext";

function index() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`relative h-[80%] w-full max-w-[500px] py-10 m-auto`}>
      <span
        className={`hidden lg:inline absolute left-10 top-16 w-full h-[87%] border-8 ${
          theme === "blue"
            ? "border-theme2"
            : theme === "yellow"
            ? "border-theme3"
            : "border-theme1"
        }`}
      ></span>
      <img
        src={home}
        alt="Mukwende Cover Photo"
        className="relative z-10 w-full h-full object-cover"
      />
    </div>
  );
}

export default index;
