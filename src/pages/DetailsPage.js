import React from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from '@material-ui/lab';

// Local imports
import '../styles/DetailsPage.css';

const DetailsPage = ({ data }) => {
  const { id } = useParams();
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
    </>
  );
};

  
export default DetailsPage;
