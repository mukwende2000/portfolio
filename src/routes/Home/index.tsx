import { FaShoppingBag, FaUser } from "react-icons/fa";
import profile from "../../assets/images/img2.jpg";
import Button from "../../shared/Button";
import Typewriter from "typewriter-effect";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

function index() {
  const { textColor } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <main className="text-primary lg:flex justify-center px-40 pt-10 font-opens hidden animate-push">
      <div className="basis-full">
        <img src={profile} alt="Mukwende" className="h-full" />
      </div>
      <div className="p-5 basis-full mt-20">
        <p className="text-xl mb-3">HI THERE!</p>
        <h1 className="text-3xl flex gap-2">
          <span className="inline">I'M</span>
          <Typewriter
            options={{
              strings: [
                "A FREELANCER",
                "A FRONTEND DEVELOPER",
                "MUKWENDE LIBIMBA",
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: `${textColor} font-800`,
            }}
          />
        </h1>
        <p className="text-lg my-5 leading-8">
          I'm a Frontend web Developer based in Lusaka, Zambia. I strive to
          build immersive and beautiful web applications through carefully
          crafted code and user-centric design.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button handleClick={() => navigate("/about")}>
            <FaUser className="relative z-10" />
            <span className="relative z-10">more about me</span>
          </Button>
          <Button handleClick={() => navigate("/portfolio")}>
            <FaShoppingBag className="relative z-10" />
            <span className="relative z-10">portfolio</span>
          </Button>
        </div>
      </div>
    </main>
  );
}

export default index;
