import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles(theme => ({
  picker: {}
}));

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: red
  }
});

const DateInput = () => {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <ThemeProvider theme={darkTheme}>
      <DatePicker
        className={classes.picker}
        views={['year']}
        label="Year"
        value={selectedDate}
        onChange={handleDateChange}
        orientation="landscape"
      />
    </ThemeProvider>
  );
};

export default DateInput;
