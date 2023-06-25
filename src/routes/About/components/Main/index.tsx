import Skills from "../Skills";
import Details from "../Details";
import Photo from "../Photo";

function index() {
  return (
    <main className="">
      <div className="lg:grid grid-cols-2 gap-20 place-items-center">
        <Photo />
        <Details />
      </div>
      <Skills />
    </main>
  );
}

export default index;
