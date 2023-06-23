import { FaDownload } from "react-icons/fa";
import details from "../../../../data/details";
import Button from "../../../../shared/Button";

function index() {
  return (
    <div className="flex flex-col lg:block items-center">
      <ul className="grid grid-cols-2 gap-10 pb-5">
        {details.map((detail) => {
          return (
            <li
              className={`font-light text-lg lg:flex gap-3 ${
                detail.textRight ? "text-right" : "text-left"
              }`}
            >
              <p className="text-gray-400">{detail.property}</p>
              <p className="text-primary text-md">{detail.value}</p>
            </li>
          );
        })}
      </ul>
      <Button>
        <FaDownload className="text-primary relative z-10" />
        <span className="text-primary relative z-10">Download my cv</span>
      </Button>
    </div>
  );
}

export default index;
