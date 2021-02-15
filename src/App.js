import Routes from "./Routes";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
    <>
      <h1 className="text-center">HelloWorld</h1>
    </>
    <Routes/>
    </Router>
  );
}

export default App;
