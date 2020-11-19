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

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  let main;
  if (activeStep === 0) {
    main = <DateInput />;
  } else if (activeStep === 1) {
    main = <LocationInput />;
  } else {
    main = (
      <Button size="large" variant="outlined" color="primary" endIcon={<SendIcon />}>
        Travel
      </Button>
    );
  }

  return (
    <section className="home__container">
      <header className="home__header">
        <img className="home__header-logo" src={logo} width="375px" />
      </header>
      {main}
      <CustomStepper activeStep={activeStep} back={handleBack} next={handleNext} />
    </section>
  );
};

export default HomePage;
