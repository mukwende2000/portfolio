import { FaShoppingBag, FaUser } from "react-icons/fa";
import profile from "../../assets/images/img2.jpg";
import Button from "../../shared/Button";
import Typewriter from "typewriter-effect";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

function index() {
  const { textColor } = useContext(ThemeContext);
  return (
    <main className="gap-40 text-primary flex items-center justify-center px-40 pt-10 h-screen w-full bg-black/90 font-opens">
      <div className="basis-full h-[100%]">
        <img src={profile} alt="Mukwende" className="h-full" />
      </div>
      <div className="p-5 basis-full">
        <p className="text-xl mb-3">HI THERE!</p>
        <h1 className="text-4xl flex gap-2">
          <span className="inline">I'M</span>
          <Typewriter
            options={{
              strings: [
                "A FREELANCER",
                "A FRONTEND DEVELOPER",
                "MUKENDE LIBIMBA",
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: `${textColor} font-800`,
            }}
          />
        </h1>
        <p className="text-lg my-5 leading-8">
          I'm a Freelance Developer based in Lusaka, Zambia. I strive to build
          immersive and beautiful web applications through carefully crafted
          code and user-centric design.
        </p>
        <Button>
          <FaUser />
          more about me
        </Button>
        <Button>
          <FaShoppingBag />
          portfolio
        </Button>
      </div>
    </main>
  );
}

export default index;
