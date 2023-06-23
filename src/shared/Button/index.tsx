import { ReactNode, useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

type Props = {
  children: ReactNode;
};

function index({ children }: Props) {
  const { backgroundColor } = useContext(ThemeContext);
  return (
    <button
      className={`relative overflow-hidden rounded-full px-5 py-3 mr-5 uppercase before:content-[''] before:bg-gray-400 before:absolute ${backgroundColor} before:-left-[100%] before:z-10 before:w-full before:duration-300 hover:before:left-[0] before:h-full inline-flex text-lg items-center gap-4`}
    >
      {children}
    </button>
  );
}

export default index;
