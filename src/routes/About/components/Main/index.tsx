import home from "../../../../assets/images/home.jpg";
import Skills from "../Skills";
import Details from "../Details";

function index() {
  return (
    <main className="">
      <div className="lg:grid grid-cols-2 gap-20 place-items-center">
        <div className={`relative h-[80%] w-full max-w-[500px] py-10 m-auto`}>
          <span
            className={`hidden lg:inline absolute left-10 top-16 w-full h-[87%] border-8 border-theme2`}
          ></span>
          <img
            src={home}
            alt="Mukwende"
            className="relative z-10 w-full h-full object-cover"
          />
        </div>
        <Details />
      </div>
      <Skills />
    </main>
  );
}

export default index;
