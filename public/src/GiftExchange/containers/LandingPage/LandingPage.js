import React, { Component } from 'react';
import countdown from 'countdown';

class LandingPage extends Component {
  state = {
    endDate: new Date('December 25 2018 00:00:00'),
    remainingTime: ''
  }

  componentDidMount() {
    this.updateRemainingTime();
    this.timerID = setInterval(() => this.updateRemainingTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateRemainingTime = () => {
    this.setState({
      remainingTime: countdown(this.state.endDate).toString()
    });
  }


  render() {
    return(
      <h1>{this.state.remainingTime}</h1>
    );
  };
};

export default LandingPage;
