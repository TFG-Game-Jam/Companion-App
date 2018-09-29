import Button from '@material-ui/core/Button';
import React, { Component } from 'react';

import { set_state } from '../network';

class Move extends Component {
  render = () => {
    return (
      <div style={{padding: '50px'}}>
        <h2>Steering</h2>
        <Button style={{fontFamily: "'VT323', monospace", fontSize: '40px', height: '300px', width: '50%'}}
            onMouseDown={() => set_state({'port': true})}
            onMouseUp={() => set_state({'port': false})}>
          Port
        </Button>
        <Button style={{fontFamily: "'VT323', monospace", fontSize: '40px', height: '300px', width: '50%'}}
            onMouseDown={() => set_state({'starboard': true})}
            onMouseUp={() => set_state({'starboard': false})}>
          Starboard
         </Button>
      </div>
    );
  }
}

export default Move;
