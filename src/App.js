import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
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
  return (
    <ThemeProvider theme={darkTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <HomePage />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default App;
