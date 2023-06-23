import {
  FaComment,
  FaEnvelope,
  FaTelegram,
  FaTelegramPlane,
  FaUser,
} from "react-icons/fa";
import Button from "../../../../shared/Button";

function index() {
  return (
    <div className="my-10 text-primary">
      <p>
        If you have any suggestion, project or even you want to say Hello.
        Please fill out the form below and I will reply you shortly.
      </p>
      <form>
        <div className="md:grid grid-cols-2 gap-10">
          <div className="relative">
            <FaUser className="text-gray-400 absolute top-[30px] left-3" />
            <input
              className="focus:outline-none w-full bg-[#555] my-3 px-10 py-4 rounded-[1rem]"
              type="text"
              placeholder="YOUR NAME"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="text-gray-400 absolute top-[30px] left-3" />
            <input
              className="focus:outline-none w-full bg-[#555] my-3 px-10 py-4 rounded-[1rem]"
              type="text"
              placeholder="YOUR EMAIL"
            />
          </div>
        </div>
        <div className="relative">
          <FaComment className="text-gray-400 absolute top-[55px] left-3" />
          <textarea
            placeholder="YOUR MESSAGE"
            name=""
            className="focus:outline-none w-full bg-[#555] my-3 px-10 pt-10 h-48 rounded-[2rem]"
            cols={30}
            rows={10}
          ></textarea>
        </div>
        <Button>
          <FaTelegramPlane className="text-primary relative z-10" />
          <span className="text-primary relative z-10">send message</span>
        </Button>
      </form>
    </div>
  );
}

export default index;
