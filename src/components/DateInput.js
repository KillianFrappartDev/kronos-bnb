import React from 'react';
import { DatePicker } from '@material-ui/pickers';

const DateInput = props => {
  return (
    <DatePicker
      maxDate={new Date('2547-01-01')}
      minDate={new Date('0000-01-01')}
      views={['year']}
      label="When?"
      value={props.value}
      onChange={props.change}
    />
  );
};

export default DateInput;
