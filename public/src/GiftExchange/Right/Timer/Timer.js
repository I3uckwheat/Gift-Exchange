import React, { Component } from 'react';
import countdown from 'countdown';

import Classes from './Timer.css';


const endDate = new Date('december 20 2018');

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
    return (
      <div className={Classes.Timer}>
        <h2>There are only: </h2>
        <p>{this.state.timeLeft.toString()}</p>
        {this.props.user ? <h2>left to wait!</h2> : <h2>left to sign up!</h2>}
      </div>
    );
  }
}

export default Timer;
