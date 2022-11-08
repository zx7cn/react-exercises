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
          onGood={this.handleGood}
          onBad={this.handleBad}
          onNeutral={this.handleNeutral}
        ></Feedback>
        <h2>Statistics</h2>
        <p>Good {this.state.numGood}</p>
        <p>Neutral {this.state.numNeutral}</p>
        <p>Bad {this.state.numBad}</p>
      </div>
    );
  }
}

export default App;
