import React, { Component } from "react";
import Card from "../components/Card";
import "../styles/ResultPage.css";
import logo from "../assets/kronos-logo2.png";

class ResultPage extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
        <img src={logo} className="result-logo" alt="logo" width="300px" />
        <div className="result-text">
          <p className="p-result-page">
            We found {this.props.data.length} results close to{" "}
            {this.props.yearUser.date}
          </p>
          <p className="p-result-page2">
            location : {this.props.yearUser.location}
          </p>
          <div className="hr"></div>
        </div>
        <Card data={this.props.data} />
      </div>
    );
  }
}

export default ResultPage;
