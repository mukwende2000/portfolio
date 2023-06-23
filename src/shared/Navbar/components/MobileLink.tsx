import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  children: ReactNode;
  path: string;
  text: string;
};

function MobileLink({ path, children, text }: Props) {
  return (
    <li className="group h-auto md:h-[100%] w-full rounded-lg bg-black/50 px-5 py-10 flex justify-center items-center">
      <NavLink to={path} className="grid gap-5 place-items-center">
        {children}
        <span className="group-hover:text-theme3 font-bold text-xl">
          {text}
        </span>
      </NavLink>
    </li>
  );
}

export default MobileLink;
