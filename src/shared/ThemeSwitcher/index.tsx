import { useContext, useState } from "react";
import { FaCog, FaTimes } from "react-icons/fa";
import ThemeContext from "../../contexts/ThemeContext";

function index() {
  const [switcherIsOpen, setSwitcherIsOpen] = useState(false);
  const { setTheme } = useContext(ThemeContext);
  return (
    <div
      className={`fixed ${
        switcherIsOpen ? "right-0" : "-right-48"
      } top-40 rounded border bg-primary duration-200`}
    >
      <div className="flex items-center">
        <button
          onClick={() => setSwitcherIsOpen((prev) => !prev)}
          className={`text-3xl p-1 bg-primary ${
            switcherIsOpen ? "ml-0" : "-ml-10"
          } duration-200`}
        >
          {switcherIsOpen ? <FaTimes /> : <FaCog className="animate-spin" />}
        </button>
        <div className="font-bold text-lg">Theme Switcher</div>
      </div>
      <div>
        <ThemeBtn
          switchTheme={() => setTheme && setTheme("green")}
          bgColor="bg-theme1"
        />
        <ThemeBtn
          switchTheme={() => setTheme && setTheme("blue")}
          bgColor="bg-theme2"
        />
        <ThemeBtn
          switchTheme={() => setTheme && setTheme("yellow")}
          bgColor="bg-theme3"
        />
      </div>
    </div>
  );
}

function ThemeBtn({
  bgColor,
  switchTheme,
}: {
  switchTheme: () => void;
  bgColor: string;
}) {
  return (
    <button
      onClick={switchTheme}
      className={`w-10 h-10 m-3 rounded-full ${bgColor} `}
    ></button>
  );
}

export default index;
