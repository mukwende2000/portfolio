import { useContext, useEffect, useState } from "react";

import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";
import Context from "../../contexts/MenuContext";

function index() {
  const [width, setWidth] = useState(innerWidth);
  const state = useContext(Context);

  useEffect(() => {
    function checkWidth() {
      setWidth(innerWidth);
    }
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  });

  return <nav>{width > 1020 ? <DesktopNav /> : <MobileNav />}</nav>;
}

export default index;
