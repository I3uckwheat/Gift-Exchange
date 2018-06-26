import React, { Component } from 'react';
import countdown from 'countdown';

class LandingPage extends Component {
  state = {
    remainingTime: ''
  };

  componentDidMount() {
    this.updateRemainingTime();
    this.timerID = setInterval(() => this.updateRemainingTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateRemainingTime = () => {
    this.setState({
      remainingTime: countdown(this.props.endDate).toString()
    });
  };

  render() {
    return (
      <h3>{this.state.remainingTime}</h3>
    );
  }
};

export default LandingPage;
