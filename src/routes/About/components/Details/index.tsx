import { FaDownload } from "react-icons/fa";
import details from "../../../../data/details";
import Button from "../../../../shared/Button";
import { useNavigate } from "react-router-dom";

function index() {
  const navigate = useNavigate();
  function downloadCv() {
    alert(
      "I am still working on my CV, It will be available as soon as i am done. In the meantime you an checkout the portfolio page to view my works. Thank you."
    );
    navigate("/portfolio");
    // const downloadLink = document.createElement("a");
    // downloadLink.href = "/cv.pdf";
    // downloadLink.download = "cv.pdf";
    // downloadLink.click();
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
