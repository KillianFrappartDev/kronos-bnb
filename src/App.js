import { useState } from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import teal from '@material-ui/core/colors/teal';

//Local imports
import HomePage from './pages/HomePage';
import './styles/App.css';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: teal
  }
});

function App() {
  const [travelData, setTravelData] = useState(null);

  const handleSubmit = data => {
    setTravelData(data);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <HomePage onSubmit={handleSubmit} />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default App;
