import { useContext, useState } from "react";
import { FaCog, FaTimes } from "react-icons/fa";
import ThemeContext from "../../contexts/ThemeContext";

function index() {
  const [switcherIsOpen, setSwitcherIsOpen] = useState(false);
  const { setTheme } = useContext(ThemeContext);
  return (
    <div
      className={`fixed z-50 ${
        switcherIsOpen ? "right-0" : "right-[-8.5rem]"
      } top-40 opacity-20 hover:opacity-100 bg-primary duration-200`}
    >
      <div className="flex items-center">
        <button
          aria-label={`${switcherIsOpen ? "Close Swicher" : "Open Switcher"}`}
          onClick={() => setSwitcherIsOpen((prev) => !prev)}
          className={`text-3xl p-1 bg-primary ${
            switcherIsOpen ? "ml-0" : "-ml-10"
          } duration-200`}
        >
          {switcherIsOpen ? <FaTimes /> : <FaCog className="animate-spin" />}
        </button>
        <div className="font-bold text-lg">Theme Switcher</div>
      </div>
      <div className={`${switcherIsOpen ? "block" : "hidden"}`}>
        <ThemeBtn
          ariaLabel="Switch theme to green"
          switchTheme={() => setTheme && setTheme("green")}
          bgColor="bg-theme1"
        />
        <ThemeBtn
          ariaLabel="Switch theme to yellow"
          switchTheme={() => setTheme && setTheme("blue")}
          bgColor="bg-theme2"
        />
        <ThemeBtn
          ariaLabel="Switch theme to yellow"
          switchTheme={() => setTheme && setTheme("yellow")}
          bgColor="bg-theme3"
        />
      </div>
    </div>
  );
}

type ThemeBtnType = {
  ariaLabel: string;
  bgColor: string;
  switchTheme: () => void;
};

function ThemeBtn({ ariaLabel, bgColor, switchTheme }: ThemeBtnType) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={switchTheme}
      className={`w-10 h-10 m-3 rounded-full ${bgColor} `}
    ></button>
  );
}

export default index;
