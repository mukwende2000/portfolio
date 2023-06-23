import { useContext } from "react";
import contacts from "../../../../data/contact";
import ThemeContext from "../../../../contexts/ThemeContext";

function index() {
  const { textColor } = useContext(ThemeContext);
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li className="my-7">
            <p className="mb-2 text-gray-400"> {contact.media} </p>
            <div className="flex gap-5 items-center">
              {<contact.icon className={`text-xl ${textColor}`} />}
              <span className="text-primary text-lg">{contact.contact}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default index;
