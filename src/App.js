import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

//Local imports
import HomePage from './pages/HomePage';
import './styles/App.css';

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <HomePage />
    </MuiPickersUtilsProvider>
  );
}

export default App;
