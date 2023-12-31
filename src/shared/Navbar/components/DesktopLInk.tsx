import { ReactNode, useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../../../contexts/ThemeContext";
import MenuContext from "../../../contexts/MenuContext";

type Props = {
  children: ReactNode;
  text: string;
  fadeAnim: string;
  dropAnim: string;
  path: string;
};
function DesktopLink({ path, children, text, dropAnim, fadeAnim }: Props) {
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext);
  const { textHover } = useContext(ThemeContext);
  return (
    <li onClick={() => setMenuIsOpen && setMenuIsOpen(false)}>
      <NavLink
        to={path}
        className={`${
          menuIsOpen ? "inline" : "hidden"
        } ml-[.6rem] uppercase mb-10 flex gap-8  w-40 ${textHover} duration-200 cursor-pointer`}
      >
        <span
          className={`-translate-y-5 opacity-0 ${
            menuIsOpen ? `${fadeAnim}` : "animate-none"
          } `}
        >
          {children}
        </span>
        <span
          className={`${
            menuIsOpen ? `${dropAnim}` : "animate-none"
          } -translate-x-16 opacity-0`}
        >
          {text}
        </span>
      </NavLink>
    </li>
  );
}

export default DesktopLink;
