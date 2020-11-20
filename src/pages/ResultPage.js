import React, { Component } from "react";
import Card from "../components/Card";

class ResultPage extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
        <Card data={this.props.data} />
      </div>
    );
  }
}

export default ResultPage;
