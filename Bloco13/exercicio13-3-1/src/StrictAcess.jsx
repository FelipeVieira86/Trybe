import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class StrictAcess extends Component {
  render() {
    const {
      user: { username, password },
    } = this.props;
    return username !== 'joão' && password !== '12345' ? (
      <div>
        {alert('Access denied')}
        <Redirect to="/" />
      </div>
    ) : (
      <div>Acess Granted</div>
    );
  }
}
