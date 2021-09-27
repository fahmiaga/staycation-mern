import "assets/scss/style.scss";
import DetailsPage from "pages/DetailsPage";
import Testing from "pages/example";
import LandingPage from "pages/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/properties/:id" component={DetailsPage}></Route>
        <Route path="/detail-test" component={Testing}></Route>
      </Router>
    </div>
  );
}

export default App;
