import Container from "../../shared/Container";
import Header from "../../shared/Header";
import Main from "./components/Main";
import { PorfolioContextProvider } from "../../contexts/PortfolioContext";

function index() {
  return (
    <div className="opacity-0 animate-push">
      <PorfolioContextProvider>
        <Container>
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
