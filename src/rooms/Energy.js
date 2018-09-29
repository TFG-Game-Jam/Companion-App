import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import React, { Component } from 'react';

import { get_state, set_actions } from '../network';

class Energy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scene: 'Welcome',
    };
  }

  componentDidMount() {
    this.timer();
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
        <h2>Energy Generator</h2>
        { this.state.energy ?
            <LinearProgress color={this.state.energy > 40 ? 'primary' : 'secondary'}
                variant='determinate' value={parseInt(this.state.energy, 10)} />  :
            <LinearProgress variant='determinate' value={0} /> }
        <div style={{padding: '50px 0px 0px 0px'}}>
          <Button style={{fontFamily: "'VT323', monospace", fontSize: '40px', height: '150px', width: '100%'}}
              color={this.state.energy < 50 ? 'secondary' : 'primary'}
              onMouseDown={set('fixGenerator')}
              onMouseUp={clear('fixGenerator')}
              onMouseLeave={clear('fixGenerator')}
              onTouchStart={set('fixGenerator')}
              onTouchEnd={clear('fixGenerator')}>
            Fix
          </Button>
        </div>
      </div>
    );
  }
}

export default Energy;
