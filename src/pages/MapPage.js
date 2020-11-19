import { useState } from 'react';

//Local imports
import FabMap from '../components/FabMap';
import ModalMap from '../components/ModalMap';

const TestPage = props => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log('KEY', process.env.REACT_APP_GOOLE_API);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ModalMap open={open} onClose={handleClose} />
      <FabMap onClick={handleOpen} />
    </>
  );
};

export default TestPage;
