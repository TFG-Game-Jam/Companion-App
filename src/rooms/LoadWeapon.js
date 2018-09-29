import Button from '@material-ui/core/Button';
import React, { Component } from 'react';

import { set_actions } from '../network';

class LoadWeapon extends Component {
  render = () => {
    const set = (key) => () => set_actions({[key]: true});
    const clear = (key) => () => set_actions({[key]: false});
    return (
      <div style={{padding: '50px'}}>
        <h2>Load Weapon</h2>
        <Button style={{fontFamily: "'VT323', monospace", fontSize: '40px', height: '150px', width: '50%', backgroundColor: 'purple'}}
            onMouseDown={set('loadPurple')}
            onMouseUp={clear('loadPurple')}
            onMouseLeave={clear('loadPurple')}
            onTouchStart={set('loadPurple')}
            onTouchEnd={clear('loadPurple')}>
          Purple
        </Button>
        <Button style={{fontFamily: "'VT323', monospace", fontSize: '40px', height: '150px', width: '50%', backgroundColor: 'green'}}
            onMouseDown={set('loadGreen')}
            onMouseUp={clear('loadGreen')}
            onMouseLeave={clear('loadGreen')}
            onTouchStart={set('loadGreen')}
            onTouchEnd={clear('loadGreen')}>
          Green
        </Button>
        <div>
            <Button style={{fontFamily: "'VT323', monospace", fontSize: '40px', height: '150px', width: '50%', backgroundColor: 'cyan'}}
                onMouseDown={set('loadCyan')}
                onMouseUp={clear('loadCyan')}
                onMouseLeave={clear('loadCyan')}
                onTouchStart={set('loadCyan')}
                onTouchEnd={clear('loadCyan')}>
            Cyan
            </Button>
            <Button style={{fontFamily: "'VT323', monospace", fontSize: '40px', height: '150px', width: '50%', backgroundColor: 'white'}}
                onMouseDown={set('loadWhite')}
                onMouseUp={clear('loadWhite')}
                onMouseLeave={clear('loadWhite')}
                onTouchStart={set('loadWhite')}
                onTouchEnd={clear('loadWhite')}>
            White
            </Button>
        </div>
      </div>
    );
  }
}

export default LoadWeapon;
