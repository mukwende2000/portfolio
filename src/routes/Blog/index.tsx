import Container from "../../shared/Container";
import Header from "../../shared/Header";

function index() {
  return (
    <>
      <Container styles=" animate-push">
        <Header
          textOne="MY"
          textTwo="BLOG"
          sub="This is a hub for sharing the little i know, i suggest you start by reading 'Why I decided to start writting articles' "
        />
      </Container>
    </>
  );
}

export default index;
