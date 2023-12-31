import Container from "../../shared/Container";
import Header from "../../shared/Header";
import Main from "./components/Main";

function index() {
  return (
    <>
      <Container styles="opacity-0 animate-fadeIn">
        <Header
          sub="i love bringing ideas to reality through code by building accessible,
        responsive user interfaces."
          textOne="ABOUT"
          textTwo="ME"
        />
        <Main />
      </Container>
    </>
  );
}

export default index;
