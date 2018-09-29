import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';

import { join_game } from './network';

class Welcome extends Component {
  nextScene = () => {
    join_game();
    this.props.setScene('WaitingRoom');
  }

  render() {
    return (
      <div>
        <TextField
          label='Room name'
        //   defaultValue='Potato'
        //   onChange={console.log}
        />
        <Button variant='contained' color='primary' disabled={false}
            style={{fontFamily: "'VT323', monospace"}} onClick={this.nextScene}>
          Join room
        </Button>
      </div>
    );
  }
}

export default Welcome;
