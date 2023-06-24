import { useContext, useEffect, useState } from "react";

import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";
import Context from "../../contexts/MenuContext";
import Backdrop from "../Backdrop";
import MenuContext from "../../contexts/MenuContext";

function index() {
  const [width, setWidth] = useState(innerWidth);
  const { setMenuIsOpen, menuIsOpen } = useContext(MenuContext);
  useEffect(() => {
    function checkWidth() {
      setWidth(innerWidth);
    }
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  });

  return (
    <nav>
      {menuIsOpen && (
        <Backdrop
          zIndex="z-40"
          onBackdropClick={() => setMenuIsOpen && setMenuIsOpen(false)}
        />
      )}
      {width > 1020 ? <DesktopNav /> : <MobileNav />}
    </nav>
  );
}

export default index;
