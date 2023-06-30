import Container from "../../shared/Container";
import Header from "../../shared/Header";
import Main from "./components/Main";

function index() {
  return (
    <div className="min-h-screen">
      <Container styles="opacity-0 animate-fadeIn">
        <Header
          textOne="GET"
          textTwo="IN TOUCH"
          sub="do you have an idea in mind, lets work together and bring that into fruition"
        />
        <Main />
      </Container>
    </div>
  );
}

export default index;
