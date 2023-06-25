import { FaBriefcase, FaEnvelopeOpen, FaUser } from "react-icons/fa";
import MobileLink from "./MobileLink";
import { useContext } from "react";
import ThemeContext from "../../../contexts/ThemeContext";
import MenuContext from "../../../contexts/MenuContext";

function MobileNav() {
  const { textColor } = useContext(ThemeContext);
  const { menuIsOpen } = useContext(MenuContext);

  return menuIsOpen ? (
    <div className="fixed py-2 bg-[#555] left-0 right-0 top-0 bottom-0 z-50 text-primary px-5 min-h-screen">
      <ul className="h-full grid md:grid-cols-2 gap-5">
        <MobileLink path={"/about"} text={"ABOUT ME"}>
          <FaUser className={`text-2xl ${textColor}`} />
        </MobileLink>

        <MobileLink text={"MY PORTFOLIO"} path={"/portfolio"}>
          <FaBriefcase className={`text-2xl ${textColor}`} />
        </MobileLink>

        <MobileLink span text={"GET IN TOUCH"} path={"/contact"}>
          <FaEnvelopeOpen className={`text-2xl ${textColor}`} />
        </MobileLink>
      </ul>
    </div>
  ) : null;
}

export default MobileNav;
