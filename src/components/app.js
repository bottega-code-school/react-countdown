import React, { Component } from 'react';
import DateForm from './date-form';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Birthday Countdown</h1>

        <DateForm />
      </div>
    );
  }
}
