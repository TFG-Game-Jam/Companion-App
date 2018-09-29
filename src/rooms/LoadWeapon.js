import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import React, { Component } from 'react';

import { get_state, set_actions } from '../network';

class LoadWeapon extends Component {
  constructor(props) {
    super(props);
    this.clicked = [false, false, false, false];
    this.shotsTaken = 0;
    this.state = {
      weaponLoad: 0,
      timeout: 0.,
    };
  }
  set = (key) => () => set_actions({[key]: true});
  clear = (key) => () => set_actions({[key]: false});

  componentDidMount() {
    this.timer();
    this.intervalId = setInterval(this.timer, 200);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  timer = () => {
    get_state(state => {
      const reactState = { ...this.state };
      const clickedButtons = this.clicked.reduce((curr, prev) => { return +curr + +prev });
      if (state.shotsTaken !== this.shotsTaken || clickedButtons > 1 || !clickedButtons || (reactState.timeout !== 0 && reactState.timeout <= .3)) {
        this.shotsTaken = state.shotsTaken;
        reactState.weaponLoad = 0;
        reactState.timeout = 0;
      }
      if (clickedButtons === 1) {
        reactState.weaponLoad += 5;
      }
      if (reactState.weaponLoad >= 100) {
        if (!reactState.timeout) {
          reactState.timeout = 3.;
        } else {
          reactState.timeout -= .2;
        }
      }
      set_actions({
        loadPurple: this.clicked[0] && reactState.weaponLoad >= 100,
        loadGreen: this.clicked[1] && reactState.weaponLoad >= 100,
        loadCyan: this.clicked[2] && reactState.weaponLoad >= 100,
        loadWhite: this.clicked[3] && reactState.weaponLoad >= 100,
      });
      this.setState(reactState);
    });
  }

  render = () => {
    return (
      <div style={{padding: '50px'}}>
        <h2>Load Weapon</h2>
        <LinearProgress color={this.state.timeout ? 'secondary' : 'primary'} variant='determinate' value={Math.floor(this.state.weaponLoad / 20) * 20} />
        <h2>Timeout: {this.state.timeout ? this.state.timeout.toFixed(1) : '-'}</h2>
        <Button style={{fontFamily: "'VT323', monospace", fontSize: '40px', height: '150px', width: '50%', backgroundColor: 'purple'}}
            onMouseDown={() => {this.clicked[0] = true}}
            onMouseUp={() => {this.clicked[0] = false}}
            onMouseLeave={() => {this.clicked[0] = false}}
            onTouchStart={() => {this.clicked[0] = true}}
            onTouchEnd={() => {this.clicked[0] = false}}>
          Purple
        </Button>
        <Button style={{fontFamily: "'VT323', monospace", fontSize: '40px', height: '150px', width: '50%', backgroundColor: 'green'}}
            onMouseDown={() => {this.clicked[1] = true}}
            onMouseUp={() => {this.clicked[1] = false}}
            onMouseLeave={() => {this.clicked[1] = false}}
            onTouchStart={() => {this.clicked[1] = true}}
            onTouchEnd={() => {this.clicked[1] = false}}>
          Green
        </Button>
        <div>
            <Button style={{fontFamily: "'VT323', monospace", fontSize: '40px', height: '150px', width: '50%', backgroundColor: 'cyan'}}
                onMouseDown={() => {this.clicked[2] = true}}
                onMouseUp={() => {this.clicked[2] = false}}
                onMouseLeave={() => {this.clicked[2] = false}}
                onTouchStart={() => {this.clicked[2] = true}}
                onTouchEnd={() => {this.clicked[2] = false}}>
            Cyan
            </Button>
            <Button style={{fontFamily: "'VT323', monospace", fontSize: '40px', height: '150px', width: '50%', backgroundColor: 'white'}}
                onMouseDown={() => {this.clicked[3] = true}}
                onMouseUp={() => {this.clicked[3] = false}}
                onMouseLeave={() => {this.clicked[3] = false}}
                onTouchStart={() => {this.clicked[3] = true}}
                onTouchEnd={() => {this.clicked[3] = false}}>
            White
            </Button>
        </div>
      </div>
    );
  }
}

export default LoadWeapon;
