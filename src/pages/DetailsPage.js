import React from 'react';
import { useParams } from "react-router-dom";


// Local imports
import '../styles/DetailsPage.css';



  const DetailsPage = ({data}) => {
    const { id } = useParams();
    console.log(id)
    const currentCard = data.filter( card => card.id === id)
    console.log(currentCard)
        return (
            <>
              <div className="split">
                <div className="left">
                  <div className="text">
                      <h1 className="textH1">{currentCard.title}</h1> 
                      <p>{currentCard.city}, {currentCard.country}, {currentCard.continent}</p>
                      ⭐⭐⭐⭐ {currentCard.rating}
                      <h5>{currentCard.description}</h5>         
                  </div>
                <div>
                    <h3 className="book">BOOK NOW</h3>
                      
                </div>    
                </div>
          
                <div className="right">
                  <div className="imageRight">
                      <img src={currentCard.image} />
                  </div>
                </div>
              </div>
          </>
        );
  };
  
export default DetailsPage;