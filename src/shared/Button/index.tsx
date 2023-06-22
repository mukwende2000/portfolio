import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function index({ children }: Props) {
  return (
    <button className="relative overflow-hidden rounded-full px-5 py-3 mr-5 uppercase before:content-[''] before:bg-gray-400 before:rotate-12 before:absolute bg-theme2 hover:bg-gray-700 duration-500 before:-left-10 before:w-1 before:duration-500 hover:before:left-[100%] before:h-full inline-flex text-lg items-center gap-4">
      {children}
    </button>
  );
}

export default index;
