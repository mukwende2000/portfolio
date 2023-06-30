import { MouseEventHandler, ReactNode, useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

type Props = {
  children: ReactNode;
  handleClick?: MouseEventHandler;
};

function index({ children, handleClick }: Props) {
  const { backgroundColor } = useContext(ThemeContext);
  return (
    <button
      onClick={handleClick}
      className={`relative overflow-hidden rounded-full px-5 py-3 mr-5 uppercase before:content-[''] before:bg-gray-400 before:absolute ${backgroundColor} before:-left-[100%] before:z-10 before:w-full before:duration-300 hover:before:left-[0] before:h-full inline-flex text-sm items-center gap-4`}
    >
      {children}
    </button>
  );
}

export default index;
