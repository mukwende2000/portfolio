import { FaComment, FaEnvelope, FaTelegramPlane, FaUser } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Button from "../../../../shared/Button";
import { MutableRefObject, useRef } from "react";

function index() {
  const formRef: MutableRefObject<any> = useRef();

  function sendEmail() {
    emailjs.sendForm(
      "portfolio",
      "portfolio_template",
      formRef.current,
      "dRHc3WkZW4CXiBLpq"
    );
  }

  return (
    <div className="my-10 text-primary">
      <p className="my-10 md:my-0">
        Talk to me about you project, send me a message below and i will reply
        Please fill out the form below and I will reply you shortly.
      </p>
      <form
        ref={formRef}
        method="POST"
        action="https://getform.io/f/357a3f4b-dcd6-4905-814b-2ee04c138b99"
        onSubmit={sendEmail}
      >
        <div className="md:grid grid-cols-2 gap-2">
          <div className="relative">
            <FaUser className="text-gray-400 absolute top-[30px] left-3" />
            <input
              required
              name="message"
              className="focus:outline-none w-full bg-[#555] my-3 pl-10 py-4 rounded-[1rem]"
              type="text"
              placeholder="YOUR NAME"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="text-gray-400 absolute top-[30px] left-3" />
            <input
              required
              name="email"
              className="focus:outline-none w-full bg-[#555] my-3 px-10 py-4 rounded-[1rem]"
              type="text"
              placeholder="YOUR EMAIL"
            />
          </div>
        </div>
        <div className="relative">
          <FaComment className="text-gray-400 absolute top-[55px] left-3" />
          <textarea
            required
            name="message"
            placeholder="YOUR MESSAGE"
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
