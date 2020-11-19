import { useState } from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import teal from '@material-ui/core/colors/teal';
import { Switch, Route, withRouter, useHistory } from 'react-router-dom';

//Local imports
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import DetailsPage from './pages/DetailsPage';
import bnbData from "./utils/Data";
import "./styles/App.css";

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: teal
  }
});

function App(props) {
  const [travelData, setTravelData] = useState(null);
  const history = useHistory();

  const handleSubmit = data => {
    console.log(data);
    setTravelData(data);
    history.push('/Results');
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ThemeProvider theme={darkTheme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <HomePage onSubmit={handleSubmit} />
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        </Route>
        <Route path="/Results">
          <ResultPage data={bnbData} />
        </Route>
        <Route path="/DetailsPage/:id">
          <DetailsPage data={bnbData} />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
