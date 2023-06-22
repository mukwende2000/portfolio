import { IconType } from "react-icons";
import { FaBars } from "react-icons/fa";

interface Contact {
  media: string;
  icon: IconType;
  contact: string;
}

const contacts: Contact[] = [
  {
    media: "Phone",
    icon: FaBars,
    contact: "+260 765 992534",
  },
  {
    media: "Email",
    icon: FaBars,
    contact: "mukwende2000@gmail.com",
  },
  {
    media: "",
    icon: FaBars,
    contact: "+260 765 992534",
  },
  {
    media: "Phone",
    icon: FaBars,
    contact: "+260 765 992534",
  },
];
