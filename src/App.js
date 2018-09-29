import Button from '@material-ui/core/Button';
import React, { Component } from 'react';

import logo from './logo.png';
import './App.css';

import WaitingRoom from './WaitingRoom';
import Welcome from './Welcome';
import Steering from './rooms/Steering';

const rooms = [
  <Steering />,
];
let currentRoom = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scene: 'Welcome'
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
            <Button style={{fontFamily: "'VT323', monospace", fontSize: '64px', color: 'white', width: '50%'}}>
              &lt;
            </Button>
            <Button style={{fontFamily: "'VT323', monospace", fontSize: '64px', color: 'white', width: '50%'}}>
              &gt;
            </Button>
          </header>
        </div>
        {rooms[currentRoom % rooms.length]}
      </div>
    )
  }
}

export default App;
