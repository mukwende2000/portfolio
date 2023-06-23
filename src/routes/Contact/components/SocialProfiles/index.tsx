import { useContext } from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import ThemeContext from "../../../../contexts/ThemeContext";

function index() {
  const { bgHover, textColor } = useContext(ThemeContext);
  return (
    <div>
      <h2 className="text-primary mb-3 text-xl">Social Profiles</h2>
      <ul className="flex  gap-5">
        <a
          href="https://www.twitter.com/mukwende16"
          target="_blank"
          className={`border border-theme2 rounded-full p-2 ${bgHover} duration-200`}
        >
          <FaTwitter className={`text-xl duration-200 ${textColor}`} />
        </a>
        <a
          href="https://www.twitter.com/mukwende16"
          target="_blank"
          className={`border border-theme2 rounded-full p-2 ${bgHover} duration-200`}
        >
          <FaDiscord className={`text-xl duration-200 ${textColor}`} />
        </a>
        <a
          href="https://www.twitter.com/mukwende16"
          target="_blank"
          className={`border border-theme2 rounded-full p-2 ${bgHover} duration-200`}
        >
          <FaTwitter className={`text-xl duration-200 ${textColor}`} />
        </a>
        <a
          href="https://www.twitter.com/mukwende16"
          target="_blank"
          className={`border border-theme2 rounded-full p-2 ${bgHover} duration-200`}
        >
          <FaTwitter className={`text-xl duration-200 ${textColor}`} />
        </a>
      </ul>
    </div>
  );
}

export default index;
