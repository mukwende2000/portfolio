import Container from "../../shared/Container";
import Header from "../../shared/Header";
import Main from "./components/Main";
import ProjectPreview from "./components/ProjectPreview";
import { PorfolioContextProvider } from "../../contexts/PortfolioContext";

function index() {
  return (
    <div>
      <PorfolioContextProvider>
        <ProjectPreview />
        <Container styles=" animate-push">
          <Header
            textOne="MY"
            textTwo="PORTFOLIO"
            sub="Browse through a few of what i have worked on below"
          />
          <Main />
        </Container>
      </PorfolioContextProvider>
    </div>
  );
}

export default index;
