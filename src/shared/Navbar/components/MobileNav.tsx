import { FaBlog, FaBriefcase, FaEnvelopeOpen, FaUser } from "react-icons/fa";
import MobileLink from "./MobileLink";
import { useContext } from "react";
import ThemeContext from "../../../contexts/ThemeContext";
import MenuContext from "../../../contexts/MenuContext";

function MobileNav() {
  const { textColor } = useContext(ThemeContext);
  const { menuIsOpen } = useContext(MenuContext);
  return menuIsOpen ? (
    <div className="text-primary p-5 min-h-screen">
      <ul className="grid h-full md:grid-cols-2 gap-5">
        <MobileLink path={"/about"} text={"ABOUT ME"}>
          <FaUser className={`text-2xl ${textColor}`} />
        </MobileLink>

        <MobileLink text={"MY PORTFOLIO"} path={"/portfolio"}>
          <FaBriefcase className={`text-2xl ${textColor}`} />
        </MobileLink>

        <MobileLink text={"GET IN TOUCH"} path={"/contact"}>
          <FaEnvelopeOpen className={`text-2xl ${textColor}`} />
        </MobileLink>

        <MobileLink text={"BLOG"} path={"/blog"}>
          <FaBlog className={`text-2xl ${textColor}`} />
        </MobileLink>
      </ul>
    </div>
  ) : null;
}

export default MobileNav;
