import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TextField
          label='Name'
          defaultValue='Potato'
          onChange={console.log}
        />
        <Button variant='contained' color='primary' disabled={false} onClick={this.sendHello}>
          Waiting for players...
        </Button>
      </div>
    );
  }

  sendHello() {
    fetch('http://127.0.0.1:5000')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(json => {
        console.log(JSON.stringify(json));
      })
      .catch((e) => {
        console.log('There has been a problem with your fetch operation: ', e.message);
      });
  }
}

export default App;
