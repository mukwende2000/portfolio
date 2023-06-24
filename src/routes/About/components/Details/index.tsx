import { FaDownload } from "react-icons/fa";
import details from "../../../../data/details";
import Button from "../../../../shared/Button";

function index() {
  function downloadCv() {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/cv.pdf";
    downloadLink.download = "cv.pdf";
    downloadLink.click();
  }
  return (
    <div className="flex flex-col lg:block items-center">
      <ul className="grid grid-cols-2 gap-10 pb-5">
        {details.map((detail) => {
          return (
            <li
              key={detail.value}
              className={`font-light lg:flex gap-1 ${
                detail.textRight ? "text-right" : "text-left"
              }`}
            >
              <p className="text-gray-400">{detail.property}</p>
              <p className="text-primary">{detail.value}</p>
            </li>
          );
        })}
      </ul>
      <Button handleClick={() => downloadCv()}>
        <FaDownload className="text-primary relative z-10" />
        <span className="text-primary relative z-10">Download my cv</span>
      </Button>
    </div>
  );
}

export default index;
