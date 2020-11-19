import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';

const DateInput = () => {
  const [selectedDate, handleDateChange] = useState(new Date());

  return <DatePicker views={['year']} label="When?" value={selectedDate} onChange={handleDateChange} />;
};

export default DateInput;
