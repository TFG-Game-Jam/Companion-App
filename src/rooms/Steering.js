import Button from '@material-ui/core/Button';
import React, { Component } from 'react';

import { set_actions } from '../network';

class Steering extends Component {
  render = () => {
    const set_port = () => set_actions({'port': true});
    const clear_port = () => set_actions({'port': false});
    const set_starboard = () => set_actions({'starboard': true});
    const clear_starboard = () => set_actions({'starboard': false});
    return (
      <div style={{padding: '50px'}}>
        <h2>Engines</h2>
        <Button style={{fontFamily: "'VT323', monospace", fontSize: '40px', height: '300px', width: '50%'}}
            variant='contained'
            onMouseDown={set_port}
            onMouseUp={clear_port}
            onMouseLeave={clear_port}
            onTouchStart={set_port}
            onTouchEnd={clear_port}>
          Port
        </Button>
        <Button style={{fontFamily: "'VT323', monospace", fontSize: '40px', height: '300px', width: '50%'}}
            variant='contained'
            onMouseDown={set_starboard}
            onMouseUp={clear_starboard}
            onMouseLeave={clear_starboard}
            onTouchStart={set_starboard}
            onTouchEnd={clear_starboard}>
          Starboard
         </Button>
      </div>
    );
  }
}

export default Steering;
