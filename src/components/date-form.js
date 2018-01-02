import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Clock from './clock';

export default class DateForm extends Component {
  constructor() {
    super();

    this.state = {
      startDate: moment(),
    }
  }

  render() {
    return (
      <div>
        <h1>Enter a birthday</h1>

        <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
        />

        <Clock />
      </div>
    )
  }
}
