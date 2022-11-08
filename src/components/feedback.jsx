import React, { Component } from "react";

class Feedback extends Component {
  state = {};
  render() {
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
      </div>
    );
  }
}

export default Feedback;
