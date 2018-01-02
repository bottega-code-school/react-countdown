import React, { Component } from 'react';
import moment from 'moment';

export default class Clock extends Component {
  constructor() {
    super();
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.birthday = moment().toString();
    this.state = { timeRemaining: {} };
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

  // Keep in and then remove when switch to form occurs
  // https://reactjs.org/docs/react-component.html#componentdidmount
  componentWillMount() {
    const submittedDate = this.props.dateFormData.startDate.toString();
    const timeLeft = this.getTimeRemaining(submittedDate);
    this.setState({ timeRemaining: timeLeft });
  }

  componentDidUpdate() {
    console.log(this.birthday);
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
    this.birthday = dateFormData.startDate.toString();
    this.startTimer();

    return(
      <div className={ dateFormData.completedForm ? 'showContent' : 'hideContent' } >

        <p>Days: {data.days}</p>
        <p>Hours: {data.hours}</p>
        <p>Minutes: {data.minutes}</p>
        <p>Seconds: {data.seconds}</p>

        <h4>until</h4>

        <h3>{dateFormData.startDate.toString()}</h3>
      </div>
    );
  }
}
