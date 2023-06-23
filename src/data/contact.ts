import { IconType } from "react-icons";
import { FaBars, FaEnvelope, FaGithub, FaPhone } from "react-icons/fa";

interface Contact {
  media: string;
  icon: IconType;
  contact: string;
}

const contacts: Contact[] = [
  {
    media: "Phone",
    icon: FaPhone,
    contact: "+260 765 992534",
  },
  {
    media: "Github",
    icon: FaGithub,
    contact: "mukwende2000",
  },
  {
    media: "Email",
    icon: FaEnvelope,
    contact: "mukwende2000@gmail.com",
  },
];
export default contacts;
