import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import React, { Component } from 'react';
import Knob from 'react-canvas-knob';

import { get_state, set_actions } from '../network';

class Energy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50,
    };
  }

  handleChange = (newValue) => {
    set_actions({ aimAngle: 3.6 * newValue});
    this.setState({value: newValue});
  };

  render = () => {
    return (
      <div style={{padding: '50px'}}>
        <h2>Aiming</h2>
        <Knob
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Energy;
