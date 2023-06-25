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
        className="grid gap-5 place-items-center"
      >
        <div className="w-[435px] py-14 grid place-items-center">
          {children}
          <span className="group-hover:text-theme3 font-bold text-xl">
            {text}
          </span>
        </div>
      </NavLink>
    </li>
  );
}

export default MobileLink;
