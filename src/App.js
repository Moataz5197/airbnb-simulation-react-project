import Routes from "./Routes";
import { BrowserRouter as Router} from "react-router-dom";
import AirBnbNavBar from "./components/Nav/nav";
import Footer from "./components/layout/footer/index";

function App() {
  return (
    <Router>
      <AirBnbNavBar />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
