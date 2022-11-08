import React, { Component } from "react";
import StatisticLine from "./statisticLine.jsx";

class Feedback extends Component {
  state = {};
  render() {
    const numBad = this.props.numBad;
    const numGood = this.props.numGood;
    const numNeutral = this.props.numNeutral;

    let average = 0;
    let positive = 0;
    if (numBad + numGood + numNeutral !== 0) {
      average = (-numBad + numGood) / (numBad + numGood + numNeutral);
      positive = (numGood / (numBad + numGood + numNeutral)) * 100 + "%";
    }

    return (
      <div>
        <button style={{ margin: 4 }} onClick={this.props.onGood}>
          Good
        </button>
        <button style={{ margin: 4 }} onClick={this.props.onNeutral}>
          Neutral
        </button>
        <button style={{ margin: 4 }} onClick={this.props.onBad}>
          Bad
        </button>
        <h2>Statistics</h2>
        {numBad + numGood + numNeutral !== 0 ? (
          <div>
            <table>
              <tbody>
            <StatisticLine text="Good" value={numGood}></StatisticLine>
            <StatisticLine text="Neutral" value={numNeutral}></StatisticLine>
            <StatisticLine text="Bad" value={numBad}></StatisticLine>
            <StatisticLine
              text="All"
              value={numBad + numGood + numNeutral}
            ></StatisticLine>
            <StatisticLine text="Average" value={average}></StatisticLine>
            <StatisticLine text="Positive" value={positive}></StatisticLine>
            </tbody>
            </table>
          </div>
        ) : (
          "No feedback given"
        )}
      </div>
    );
  }
}

export default Feedback;
