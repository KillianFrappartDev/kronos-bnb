import React from 'react';
import { Button } from 'react-bootstrap';

const Message = ({ handleShow, name, lastName }) => {
  return (
    <div className="Modal">
      <label className="label"> Thank you! ✅ </label>
      <Button className="btn" onClick={handleShow}>
        Close
      </Button>
    </div>
  );
};

export default Message;
