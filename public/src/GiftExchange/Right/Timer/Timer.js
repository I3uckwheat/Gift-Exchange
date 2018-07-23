import React, { Component } from 'react';

import countdown from 'countdown';

const endDate = new Date('december 25 2018');

class Timer extends Component {
  state = {
    timeLeft: countdown(endDate)
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      timeLeft: countdown(endDate)
    });
  }

  render() {
    return <p>{this.state.timeLeft.toString()}</p>;
  }
}

export default Timer;
