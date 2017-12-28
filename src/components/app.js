import React, { Component } from 'react';
import Clock from './clock';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Birthday Countdown</h1>

        <Clock />
      </div>
    );
  }
}
