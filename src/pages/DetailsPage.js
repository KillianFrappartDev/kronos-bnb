import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from '@material-ui/lab';

// Local imports
import FabMap from '../components/FabMap';
import ModalMap from '../components/ModalMap';
import '../styles/DetailsPage.css';

const DetailsPage = ({ data }) => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const currentCard = data.filter(card => card.id == id);
  return (
    <>
      <div className="split">
        <div className="left">
          <div className="text">
            <h1 className="textH1">{currentCard[0].title}</h1>
            <p>
              {currentCard[0].city}, {currentCard[0].country}, {currentCard[0].continent}
            </p>
            <Rating name="read-only" value={currentCard[0].rating} readOnly />
            <h5>{currentCard[0].description}</h5>
          </div>
          <div>
            <button className="book buttonBook">BOOK NOW</button>
          </div>
        </div>

        <div className="right">
          <div className="imageRight">
            <img src={currentCard[0].image} />
          </div>
        </div>
      </div>
      <ModalMap center={currentCard[0].coords} open={open} onClose={handleClose} />
      <FabMap onClick={handleOpen} />
    </>
  );
};

  
export default DetailsPage;
