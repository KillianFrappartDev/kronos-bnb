import { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

// Local imports
import logo from '../assets/kronos-logo2.png';
import DateInput from '../components/DateInput';
import LocationInput from '../components/LocationInput';
import CustomStepper from '../components/CustomStepper';
import '../styles/HomePage.css';

const HomePage = props => {
  const [activeStep, setActiveStep] = useState(0);
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState('asia');

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleDate = e => {
    setDate(e.toString().substring(11, 15));
  };

  const handleLocation = e => {
    setLocation(e.target.value);
  };

  let main;
  if (activeStep === 0) {
    main = <DateInput value={date} change={handleDate} />;
  } else if (activeStep === 1) {
    main = <LocationInput value={location} change={handleLocation} />;
  } else {
    main = (
      <Button
        onClick={props.onSubmit.bind(null, { date: typeof date === 'string' ? parseInt(date) : 2020, location })}
        size="large"
        variant="outlined"
        color="primary"
        endIcon={<SendIcon />}
      >
        Travel
      </Button>
    );
  }

  return (
    <section className="home__container">
      <header className="home__header">
        <img className="home__header-logo" src={logo} width="500px" alt="logo" />
      </header>
      {main}
      <CustomStepper activeStep={activeStep} back={handleBack} next={handleNext} />
    </section>
  );
};