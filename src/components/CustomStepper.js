import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import RoomIcon from '@material-ui/icons/Room';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';

// Steps
const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22
  },
  active: {
    '& $line': {
      backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
    }
  },
  completed: {
    '& $line': {
      backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1
  }
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  active: {
    backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
  },
  completed: {
    backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'
  }
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <WatchLaterIcon />,
    2: <RoomIcon />,
    3: <CheckCircleIcon />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

// Component
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  button: {
    marginRight: theme.spacing(1),
    color: '#FFF'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  actions: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const CustomStepper = props => {
  const classes = useStyles();
  const steps = ['Pick up a period', 'Select a continent', 'Browse results!'];

  return (
    <div className={classes.root}>
      <div className={classes.actions}>
        <Button disabled={props.activeStep === 0} onClick={props.back} className={classes.button}>
          Back
        </Button>
        {props.activeStep !== steps.length - 1 && (
          <Button variant="contained" color="primary" onClick={props.next} className={classes.button}>
            Next
          </Button>
        )}
      </div>
      <Stepper
        style={{ backgroundColor: '#0d0f22' }}
        alternativeLabel
        activeStep={props.activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <p style={{ color: '#FFF' }}>{label}</p>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default CustomStepper;
