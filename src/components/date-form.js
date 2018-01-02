import React, { Component } from 'react';
import Clock from './clock';

export default class DateForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Enter a birthday</h1>

        <Clock />
      </div>
    )
  }
}
