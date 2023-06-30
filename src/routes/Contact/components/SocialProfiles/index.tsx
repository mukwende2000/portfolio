import { useContext } from "react";
import { FaDiscord, FaLinkedin, FaMedal, FaTwitter } from "react-icons/fa";
import ThemeContext from "../../../../contexts/ThemeContext";

function index() {
  const { bgHover, textColor } = useContext(ThemeContext);
  return (
    <div>
      <h2 className="text-primary mb-3 text-xl">Social Profiles</h2>
      <ul className="flex gap-5">
        <li
          className={`border border-theme2 rounded-full p-2 ${bgHover} duration-200`}
        >
          <a
            aria-label="go to twitter"
            href="https://www.twitter.com/mukwende16"
            target="_blank"
          >
            <FaTwitter className={`text-xl duration-200 ${textColor}`} />
          </a>
        </li>
        <li
          className={`border border-theme2 rounded-full p-2 ${bgHover} duration-200`}
        >
          <a
            aria-label="go to frontend mentor"
            href="https://www.frontendmentor.io/profile/mukwende2000"
            target="_blank"
          >
            <FaMedal className={`text-xl duration-200 ${textColor}`} />
          </a>
        </li>
        <li
          className={`border border-theme2 rounded-full p-2 ${bgHover} duration-200`}
        >
          <a
            aria-label="go to discord"
            href="https://discord.com/channels/@me"
            target="_blank"
          >
            <FaDiscord className={`text-xl duration-200 ${textColor}`} />
          </a>
        </li>
        <li
          className={`border border-theme2 rounded-full p-2 ${bgHover} duration-200`}
        >
          <a
            aria-label="go to linkedin"
            href="https://www.linkedin.com/in/mukwende-jnr-4ab441167/"
            target="_blank"
          >
            <FaLinkedin className={`text-xl duration-200 ${textColor}`} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default index;
