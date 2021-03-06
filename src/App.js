import Routes from "./Routes";
import { BrowserRouter as Router} from "react-router-dom";
import AirBnbNavBar from "./components/Nav/nav";

function App() {
  return (
    <Router>
      <AirBnbNavBar />
      <Routes />
    </Router>
  );
}

export default App;
