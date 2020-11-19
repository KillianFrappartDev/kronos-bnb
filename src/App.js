//Local imports
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import { Switch, Route, Link, Router, withRouter } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Results">Result Page</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/Results">
          <ResultPage />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
