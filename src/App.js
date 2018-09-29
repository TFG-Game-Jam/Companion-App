import Button from '@material-ui/core/Button';
import React, { Component } from 'react';

import logo from './logo.png';
import './App.css';

import WaitingRoom from './WaitingRoom';
import Welcome from './Welcome';
import Aim from './rooms/Aim';
import LoadWeapon from './rooms/LoadWeapon';
import Energy from './rooms/Energy';
import Steering from './rooms/Steering';

const rooms = [
  <Steering />,
  <LoadWeapon />,
  <Energy />,
  <Aim />,
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scene: 'Welcome',
      currentRoom: 0,
    };
  }

  setScene = scene => {
    this.setState({scene});
  }

  render() {
    if (this.state.scene === 'Welcome' || this.state.scene === 'WaitingRoom') {
      return (
        <div className='App'>
          <div>
            <header className='App-header'>
              <img src={logo} className='App-logo' alt='logo' />
            </header>
            <h1>Space Invaders loko</h1>
          </div>
          {this.state.scene === 'Welcome' ? <Welcome setScene={this.setScene} /> : <WaitingRoom setScene={this.setScene} />}
        </div>
      )
    }
    return (
      <div className='App'>
        <div>
          <header className='App-header'>
            <Button style={{fontFamily: "'VT323', monospace", fontSize: '40px', color: 'white', width: '50%'}}
                onClick={() => this.setState(state => ({ ...state, currentRoom: (state.currentRoom + rooms.length - 1) % rooms.length}))}>
              &lt;
            </Button>
            <Button style={{fontFamily: "'VT323', monospace", fontSize: '40px', color: 'white', width: '50%'}}
                onClick={() => this.setState(state => ({ ...state, currentRoom: (state.currentRoom + 1) % rooms.length}))}>
              &gt;
            </Button>
          </header>
        </div>
        {rooms[this.state.currentRoom]}
      </div>
    )
  }
}

export default App;
