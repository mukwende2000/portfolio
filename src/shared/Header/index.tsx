import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

type Props = {
  textOne: string;
  textTwo: string;
  sub: string;
};

function index({ textOne, textTwo, sub }: Props) {
  const { textColor } = useContext(ThemeContext);
  return (
    <header className="text-center">
      <h1 className="font-poppins font-900 text-6xl text-primary">
        {textOne} <span className={`${textColor}`}>{textTwo}</span>
      </h1>
      <p className="uppercase text-gray-300 mt-5">{sub}</p>
    </header>
  );
}

export default index;
