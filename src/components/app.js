import React, { Component } from 'react';
import Countdown from './countdown';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Birthday Countdown</h1>

        <Countdown />
      </div>
    );
  }
}
