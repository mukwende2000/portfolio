import { ReactNode, useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../../../contexts/ThemeContext";
import MenuContext from "../../../contexts/MenuContext";

type Props = {
  children: ReactNode;
  path: string;
  text: string;
  span?: boolean;
};

function MobileLink({ path, children, text, span }: Props) {
  const { setMenuIsOpen } = useContext(MenuContext);
  return (
    <li
      className={`group h-auto md:h-[100%] w-full rounded-lg bg-black/50 px-5 flex justify-center items-center ${
        span ? "md:col-start-1 md:col-end-3" : null
      }`}
    >
      <NavLink
        onClick={() => setMenuIsOpen && setMenuIsOpen(false)}
        to={path}
        className=" w-full h-full flex items-center justify-center flex-col"
      >
        {children}
        <span className="group-hover:text-theme3 font-bold text-xl">
          {text}
        </span>
      </NavLink>
    </li>
  );
}

export default MobileLink;
