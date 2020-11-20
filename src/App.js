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
import bnbData from './utils/Data';
import './styles/App.css';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: teal
  }
});

function App(props) {
  const [travelData, setTravelData] = useState({});
  const history = useHistory();

  const handleSubmit = data => {
    setTravelData(data);
    history.push('/Results');
  };

  const filterData = () => {
    if (travelData == null) {
      return;
    }
    return bnbData.filter(item => {
      const dif = Math.abs(item.year - travelData.date);
      if (dif <= 300 && item.continent === travelData.location) {
        return true;
      } else {
        return false;
      }
    });
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
          <ResultPage data={filterData()} yearUser={travelData} />
        </Route>
        <Route path="/DetailsPage/:id">
          <DetailsPage data={bnbData} />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
