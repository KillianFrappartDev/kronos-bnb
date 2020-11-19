import React, { Component } from "react";
import { useHistory } from "react-router-dom";

// Local imports
import '../styles/Cards.css';


const Card = (props) => {

  const history = useHistory();

  const handleSubmit = (id) => {
    history.push("/DetailsPage/"+id);
  };
  

    return (
      <>
        <div  style={{ display: "flex", flexWrap: "wrap" }}>
          {props.data.map((item) => (
            <div onClick={handleSubmit.bind(null, item.id)} className="center" key={item.id}>
              <div className="property-card">
                <a>
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                    className="property-image"
                  >
                    <div className="property-image-title"></div>
                  </div>
                </a>
                <div className="property-description">
                  <h5 className="h5-card">{item.title}</h5>
                  <p className="p-card">
                    year : {item.year} <br />
                    city : {item.city} <br />
                    country : {item.country} <br />
                  </p>
                </div>
                <a>
                  <div className="property-social-icons"></div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  
}

export default Card;
