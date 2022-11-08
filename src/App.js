import React, { Component } from "react";
import "./App.css";
import Feedback from "./components/feedback";

class App extends Component {
  state = {
    numBad: 0,
    numGood: 0,
    numNeutral: 0,
  };

  handleBad = () => {
    const numBad = this.state.numBad + 1;
    this.setState({ numBad });
  };

  handleGood = () => {
    const numGood = this.state.numGood + 1;
    this.setState({ numGood });
  };

  handleNeutral = () => {
    const numNeutral = this.state.numNeutral + 1;
    this.setState({ numNeutral });
  };

  render() {
    return (
      <div className="App">
        <h1>Give Feedback</h1>
        <Feedback
          numBad={this.state.numBad}
          numGood={this.state.numGood}
          numNeutral={this.state.numNeutral}
          onGood={this.handleGood}
          onBad={this.handleBad}
          onNeutral={this.handleNeutral}
        ></Feedback>
      </div>
    );
  }
}

export default App;
