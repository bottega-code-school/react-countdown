import React, { Component } from 'react';

export default class Clock extends Component {
  constructor() {
    super();
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.birthday = '2018-07-31';

    this.state = { timeRemaining: {} };

    this.startTimer()
  }

  getTimeRemaining(birthday){
    var epochTimeToBirthday = Date.parse(birthday) - Date.parse(new Date()); // number of milliseconds since January 1, 1970
    var seconds = Math.floor( (epochTimeToBirthday/1000) % 60 );
    var minutes = Math.floor( (epochTimeToBirthday/1000/60) % 60 );
    var hours = Math.floor( (epochTimeToBirthday/(1000*60*60)) % 24 );
    var days = Math.floor( epochTimeToBirthday/(1000*60*60*24) );

    return {
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  // Do this afterwards to fix delay
  // https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {
    const timeLeft = this.getTimeRemaining(this.birthday);
    this.setState({ timeRemaining: timeLeft });
  }

  startTimer() {
    if (this.timer == 0) {
      this.timer = setInterval(() => {
        this.setState({ timeRemaining: this.getTimeRemaining(this.birthday) });
      }, 1000);
    }
  }

  render() {
    const dateFormData = this.props.dateFormData;
    const data = this.state.timeRemaining;

    return(
      <div className={ dateFormData.completedForm ? 'showContent' : 'hideContent' } >
        <h2>Countdown to: {this.birthday}</h2>

        <p>Days: {data.days}</p>
        <p>Hours: {data.hours}</p>
        <p>Minutes: {data.minutes}</p>
        <p>Seconds: {data.seconds}</p>
      </div>
    );
  }
}
