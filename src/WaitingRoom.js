import Button from '@material-ui/core/Button';
import React, { Component } from 'react';

import { get_players } from './network';

class WaitingRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasPlayers: false,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer, 700);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  timer = () => get_players(players => {
    if (players.length >= 2) {
      this.setState({ hasPlayers: true });
    }
  });

  nextScene = () => this.props.setScene('Move');
  render = () => {
    return (
      <div>
        <Button variant='contained' color='primary' disabled={!this.state.hasPlayers}
            style={{fontFamily: "'VT323', monospace"}} onClick={this.nextScene}>
          { this.state.hasPlayers ? 'Start game' : 'Waiting for players...'}
        </Button>
      </div>
    );
  }
}

export default WaitingRoom;
