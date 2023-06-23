import {
  FaBars,
  FaBlog,
  FaEnvelopeOpen,
  FaHome,
  FaShoppingBag,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import DesktopLink from "./DesktopLInk";
import { useContext } from "react";
import Context from "../../../contexts/MenuContext";
import MenuContext from "../../../contexts/MenuContext";

function DesktopNav() {
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext);
  return (
    <div
      className={`${
        menuIsOpen ? "h-[60%] overflow-visible" : "h-12 overflow-hidden"
      } fixed mx-10 my-2 text-primary bg-[#2b2929] px-3 py-3 w-12 rounded-full duration-300`}
    >
      <ul>
        <li
          onClick={() => setMenuIsOpen && setMenuIsOpen((prev) => !prev)}
          className="text-xl mb-8 hover:text-theme3 duration-200 cursor-pointer"
        >
          {menuIsOpen ? <FaTimes /> : <FaBars />}
        </li>
        <DesktopLink
          path="/"
          text="Home"
          fadeAnim="animate-[drop_.4s_ease-in-out_forwards]"
          dropAnim="animate-[moveIn_.4s_ease-out_.1s_forwards]"
        >
          <FaHome />
        </DesktopLink>

        <DesktopLink
          path="/about"
          text="About"
          fadeAnim="animate-[drop_.4s_ease-in-out_.1s_forwards]"
          dropAnim="animate-[moveIn_.4s_ease-out_.15s_forwards]"
        >
          <FaUser />
        </DesktopLink>

        <DesktopLink
          path="/portfolio"
          text="Portfolio"
          fadeAnim="animate-[drop_.4s_ease-in-out_.15s_forwards]"
          dropAnim="animate-[moveIn_.4s_ease-out_.2s_forwards]"
        >
          <FaShoppingBag />
        </DesktopLink>

        <DesktopLink
          path="/contact"
          text="Contact"
          fadeAnim="animate-[drop_.4s_ease-in-out_.2s_forwards]"
          dropAnim="animate-[moveIn_.4s_ease-out_.25s_forwards]"
        >
          <FaEnvelopeOpen />
        </DesktopLink>

        <DesktopLink
          path="/blog"
          text="Blog"
          fadeAnim="animate-[drop_.4s_ease-in-out_.25s_forwards]"
          dropAnim="animate-[moveIn_.4s_ease-out_.3s_forwards]"
        >
          <FaBlog />
        </DesktopLink>
      </ul>
    </div>
  );
}

export default DesktopNav;
