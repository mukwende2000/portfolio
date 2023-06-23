import { useContext } from "react";
import ThemeContext from "../../../../contexts/ThemeContext";
import Contacts from "../Contacts";
import SocialProfiles from "../SocialProfiles";
import Form from "../Form";

function index() {
  const { textColor, bgHover } = useContext(ThemeContext);

  return (
    <main>
      <div className="md:flex md:gap-10 lg:gap-40">
        <div>
          <Contacts />
          <SocialProfiles />
        </div>
        <Form />
      </div>
    </main>
  );
}

export default index;
