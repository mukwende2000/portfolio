import { FaBlog, FaBriefcase, FaEnvelopeOpen, FaUser } from "react-icons/fa";
import MobileLink from "./MobileLink";

function MobileNav() {
  return (
    <div className="text-primary p-5 h-screen">
      <ul className="grid h-full md:grid-cols-2 gap-5">
        <MobileLink path={"/about"} text={"ABOUT ME"}>
          <FaUser className="text-2xl text-theme3" />
        </MobileLink>

        <MobileLink text={"MY PORTFOLIO"} path={"/portfolio"}>
          <FaBriefcase className="text-2xl text-theme3" />
        </MobileLink>

        <MobileLink text={"GET IN TOUCH"} path={"/contact"}>
          <FaEnvelopeOpen className="text-2xl text-theme3" />
        </MobileLink>

        <MobileLink text={"BLOG"} path={"/blog"}>
          <FaBlog className="text-2xl text-theme3" />
        </MobileLink>
      </ul>
    </div>
  );
}

export default MobileNav;
