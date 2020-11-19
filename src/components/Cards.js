import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

// Local imports
import '../styles/Cards.css';

const example = {
  title: 'Storming of the Bastille',
  year: 1789,
  city: 'Paris',
  country: 'France'
};

class Cards extends Component {

  function HomeButton() {
    let history = useHistory();
  
    function handleClick() {
      history.push("/DetailsPage");
    }

  render() {
    return (
      <div onClick={this.handleClick()}>
        <div className="center">
          <div className="property-card">
            <a href="#">
              <div
                style={{
                  backgroundImage:
                    'url("https://cdn.photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg")'
                }}
                className="property-image"
              >
                <div className="property-image-title"></div>
              </div>
            </a>
            <div className="property-description">
              <h5 className="h5-card">{example.title}</h5>
              <p className="p-card">
                year : {example.year} <br />
                city : {example.city} <br />
                country : {example.country} <br />
              </p>
            </div>
            <a href="#">
              <div className="property-social-icons"></div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
