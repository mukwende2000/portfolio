import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import ThemeContext from "../../contexts/ThemeContext";
import MenuContext from "../../contexts/MenuContext";

function index() {
  const { backgroundColor } = useContext(ThemeContext);
  const { setMenuIsOpen, menuIsOpen } = useContext(MenuContext);
  return !menuIsOpen ? (
    <button
      onClick={() => setMenuIsOpen && setMenuIsOpen(true)}
      className={`lg:hidden text-primary text-3xl px-9 py-6 -ml-7 -mt-2 rounded-br-[60px] ${backgroundColor}`}
    >
      <FaArrowLeft />
    </button>
  ) : null;
}

export default index;
