import { FaComment, FaEnvelope, FaTelegramPlane, FaUser } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Button from "../../../../shared/Button";
import { UseFormReturn, useForm } from "react-hook-form";
import {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

function index() {
  const [message, setMessage] = useState("");
  const form = useForm();
  const { register, formState, handleSubmit } = form;
  const { errors } = formState;

  const formRef: MutableRefObject<any> = useRef();

  function send(data: any) {
    emailjs
      .sendForm(
        "portfolio",
        "portfolio_template",
        formRef.current,
        "dRHc3WkZW4CXiBLpq"
      )
      .then((result) => {
        setMessage("Message recieved successfully, check your email");
      })
      .catch((error) => {
        setMessage("Oops something went wrong");
      });
  }

  const regExp =
    /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
  return (
    <div className="my-10 text-primary">
      <p className="my-10 md:my-0">
        If you have any suggestion, project or even you want to say Hello.
        Please fill out the form below and I will reply you shortly.
      </p>
      <form ref={formRef} onSubmit={handleSubmit(send)}>
        <div className="md:grid grid-cols-2 gap-2">
          <div className="relative">
            <FaUser className="text-gray-400 absolute top-[30px] left-3" />
            <input
              {...register("name", { required: "Please Enter your Name" })}
              className="focus:outline-none w-full bg-[#555] my-3 pl-10 py-4 rounded-[1rem]"
              type="text"
              placeholder="YOUR NAME"
            />
            <p className="text-red-500 text-sm">
              {errors.name?.message as ReactNode}
            </p>
          </div>
          <div className="relative">
            <FaEnvelope className="text-gray-400 absolute top-[30px] left-3" />
            <input
              {...register("email", {
                required: "We can't communicate without your email",
                pattern: {
                  value: regExp,
                  message: "Looks like the email is invalid, check it",
                },
              })}
              className="focus:outline-none w-full bg-[#555] my-3 px-10 py-4 rounded-[1rem]"
              type="text"
              placeholder="YOUR EMAIL"
            />
            <p className="text-red-500 text-sm">
              {errors.email?.message as ReactNode}
            </p>
          </div>
        </div>
        <div className="relative">
          <FaComment className="text-gray-400 absolute top-[55px] left-3" />
          <textarea
            {...register("message", {
              required: "What is your message",
            })}
            placeholder="YOUR MESSAGE"
            className="focus:outline-none w-full bg-[#555] my-3 px-10 pt-10 h-48 rounded-[2rem]"
            cols={30}
            rows={10}
          ></textarea>
          <p className="text-red-500 text-sm">
            {errors.message?.message as ReactNode}
          </p>
        </div>
        <Button>
          <FaTelegramPlane className="text-primary relative z-10" />
          <span className="text-primary relative z-10">send message</span>
        </Button>
      </form>
      <p>{message} </p>
    </div>
  );
}

export default index;
