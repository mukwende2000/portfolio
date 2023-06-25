import { useContext, useEffect } from "react";
import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";
import Backdrop from "../Backdrop";
import MenuContext from "../../contexts/MenuContext";
import useMediaQuery from "../../hooks/useMediaQuery";

function index() {
  const { setMenuIsOpen, menuIsOpen } = useContext(MenuContext);
  const isAboveQuery = useMediaQuery("(min-width: 1020px)");
  useEffect(() => {
    if (isAboveQuery) {
      setMenuIsOpen && setMenuIsOpen(false);
    } else {
      setMenuIsOpen && setMenuIsOpen(true);
    }
  }, [isAboveQuery]);

  return (
    <nav>
      {menuIsOpen && (
        <Backdrop
          zIndex="z-40"
          onBackdropClick={() => setMenuIsOpen && setMenuIsOpen(false)}
        />
      )}
      {isAboveQuery ? <DesktopNav /> : <MobileNav />}
    </nav>
  );
}

export default index;
useContext;
