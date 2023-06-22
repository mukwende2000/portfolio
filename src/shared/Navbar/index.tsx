import { useState } from "react";
import {
  FaBars,
  FaEnvelopeOpen,
  FaEnvelopeOpenText,
  FaHome,
  FaShoppingBag,
  FaTimes,
  FaUser,
} from "react-icons/fa";

function index() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${
        isOpen ? "h-80 overflow-visible" : "h-12 overflow-hidden"
      } hidden lg:fixed m-10 text-primary bg-[#555] px-3 py-3 w-12 rounded-full duration-300`}
    >
      <ul>
        <li
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-xl mb-8 hover:text-theme3 duration-200 cursor-pointer"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </li>
        <li
          className={` mb-5 flex gap-8 text-xl w-40 hover:text-theme3 duration-200 cursor-pointer`}
        >
          <button
            className={`-translate-y-5 ${
              isOpen
                ? "animate-[drop_.4s_ease-out_.1s_forwards]"
                : "animate-none"
            } `}
          >
            <FaHome />
          </button>
          <span
            className={`${
              isOpen
                ? "animate-[moveIn_.4s_ease-out_.1s_forwards]"
                : "animate-none"
            } -translate-x-5`}
          >
            Home
          </span>
        </li>
        <li className="mb-5 flex gap-8 text-xl w-40 hover:text-theme3 duration-200 cursor-pointer">
          <button
            className={`-translate-y-5 ${
              isOpen
                ? "animate-[drop_.4s_ease-out_.15s_forwards]"
                : "animate-none"
            } `}
          >
            <FaUser />
          </button>
          <span
            className={`${
              isOpen
                ? "animate-[moveIn_.4s_ease-out_.15s_forwards]"
                : "animate-none"
            } -translate-x-5`}
          >
            About
          </span>
        </li>
        <li className="mb-5 flex gap-8 text-xl w-40 hover:text-theme3 duration-200 cursor-pointer">
          <button
            className={`-translate-y-5 ${
              isOpen
                ? "animate-[drop_.4s_ease-out_.2s_forwards]"
                : "animate-none"
            } `}
          >
            <FaShoppingBag />
          </button>
          <span
            className={`${
              isOpen
                ? "animate-[moveIn_.4s_ease-out_.2s_forwards]"
                : "animate-none"
            } -translate-x-5`}
          >
            Porfolio
          </span>
        </li>
        <li className="mb-5 flex gap-8 text-xl w-40 hover:text-theme3 duration-200 cursor-pointer">
          <button
            className={`-translate-y-5 ${
              isOpen
                ? "animate-[drop_.4s_ease-out_.25s_forwards]"
                : "animate-none"
            } `}
          >
            <FaEnvelopeOpenText />
          </button>
          <span
            className={`${
              isOpen
                ? "animate-[moveIn_.4s_ease-out_.25s_forwards]"
                : "animate-none"
            } -translate-x-5`}
          >
            Contact
          </span>
        </li>

        <li className="mb-5 flex gap-8 text-xl w-40 hover:text-theme3 duration-200 cursor-pointer">
          <button
            className={`-translate-y-5 ${
              isOpen
                ? "animate-[drop_.4s_ease-out_.3s_forwards]"
                : "animate-none"
            } `}
          >
            <FaEnvelopeOpen />
          </button>
          <span
            className={`${
              isOpen
                ? "animate-[moveIn_.4s_ease-out_.3s_forwards]"
                : "animate-none"
            } -translate-x-5`}
          >
            Blog
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default index;
