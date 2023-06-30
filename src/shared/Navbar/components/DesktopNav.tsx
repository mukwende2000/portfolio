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
import MenuContext from "../../../contexts/MenuContext";
import ThemeContext from "../../../contexts/ThemeContext";

function DesktopNav() {
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext);
  const { textHover } = useContext(ThemeContext);
  return (
    <div
      className={`${
        menuIsOpen ? "h-[53%] overflow-visible" : "h-12 overflow-hidden"
      } fixed z-40 left-5 my-2 text-primary bg-[#2b2929] px-3 py-3 w-16 rounded-full duration-300`}
    >
      <ul>
        <li
          onClick={() => setMenuIsOpen && setMenuIsOpen((prev) => !prev)}
          className={`ml-[.6rem] text-xl mb-8 ${textHover} duration-200 cursor-pointer`}
        >
          <button aria-label="open menu">
            {menuIsOpen ? <FaTimes /> : <FaBars />}
          </button>
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
      </ul>
    </div>
  );
}

export default DesktopNav;
