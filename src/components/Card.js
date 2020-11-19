import "../styles/Cards.css";
import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    console.log(props.data);
  }
  render() {
    return (
      <>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.props.data.map((item) => (
            <div className="center" key={item.id}>
              <div className="property-card">
                <a href="#">
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
                <a href="#">
                  <div className="property-social-icons"></div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Card;
