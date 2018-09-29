import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import React, { Component } from 'react';
import Knob from 'react-canvas-knob';

import { get_state, set_actions } from '../network';

class Energy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scene: 'Welcome',
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer, 700);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  timer = () => get_state(state => this.setState({ energy: state.energy }));

  render = () => {
    const set = (key) => () => set_actions({[key]: true});
    const clear = (key) => () => set_actions({[key]: false});
    return (
      <div style={{padding: '50px'}}>
        <h2>Aiming</h2>
        <Knob
          value={50}
          //   onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Energy;
