import { useState } from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import teal from '@material-ui/core/colors/teal';
import { Switch, Route, Link, Router, withRouter } from "react-router-dom";

//Local imports
import HomePage from './pages/HomePage';
import ResultPage from "./pages/ResultPage";
import './styles/App.css';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: teal
  }
});

function App(props) {
     const [travelData, setTravelData] = useState(null);
    
      const handleSubmit = data => {
    setTravelData(data);
  };
    
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
              <ThemeProvider theme={darkTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <HomePage onSubmit={handleSubmit} />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
        </Route>
        <Route path="/Results">
          <ResultPage />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
