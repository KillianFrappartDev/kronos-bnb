import React from 'react';
import { useParams } from "react-router-dom";


// Local imports
import '../styles/DetailsPage.css';



  const DetailsPage = ({data}) => {
    const { id } = useParams();
    console.log(id)
    const currentCard = data.filter( card => card.id == id)
    console.log(currentCard[0])
        return (
            <>
              <div className="split">
                <div className="left">
                  <div className="text">
                      <h1 className="textH1">{currentCard[0].title}</h1> 
                      <p>{currentCard[0].city}, {currentCard[0].country}, {currentCard[0].continent}</p>
                      ⭐⭐⭐⭐ {currentCard[0].rating}
                      <h5>{currentCard[0].description}</h5>         
                  </div>
                <div>
                    <h3 className="book">BOOK NOW</h3>
                      
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