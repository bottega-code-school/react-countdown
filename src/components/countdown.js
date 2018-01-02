import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Clock from './clock';

export default class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment(),
      completedForm: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleSubmit(event) {
    this.setState({ completedForm: true });
    event.preventDefault();
  }

  // Show async nature of state and that it does not always update
  // immediately
  componentDidUpdate() {
    //console.log(this.state.completedForm);
    //console.log(this.state.startDate);
  }

  render() {
    return (
      <div>
        <h1>Enter a birthday</h1>

        <form onSubmit={this.handleSubmit} id="countdownForm" className={ this.state.completedForm ? 'hideContent' : 'showContent' }>
          <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
          />

          <input type="submit" value="Submit" />
        </form>

        <Clock dateFormData={this.state} />
      </div>
    )
  }
}
