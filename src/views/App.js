import React, { Component } from 'react';
import Button from 'antd/lib/button';
import message from 'antd/lib/message';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  handleClick = () => {
    message.success('This is a normal message');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.<br></br>
          <Button onClick={this.handleClick} type="primary">Button</Button>
        </p>
      </div>
    );
  }
}

export default App;
