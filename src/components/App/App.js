import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import { Field } from '../Field';

export class App extends Component {

  state = {
    startGame: false,
    resetGame:false
  }
  startRaceHandler = () => {
    this.setState({startGame: true});
    this.refs.btn.setAttribute("disabled","disabled");
  }
  resetGameHandler = () => {
    this.setState({startGame: false});
    this.refs.btn.removeAttribute("disabled");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Horse Race Application</h1>
        </header>
        <div className="Race-field ">
          <Field startGame= {this.state.startGame}/>
        </div>
        <div className="Button-div">
          <button ref="btn" style={{backgroundColor: 'green'}} className="button" onClick= {this.startRaceHandler}>Start race</button>
          <button style={{backgroundColor: 'red'}} className="button" onClick={this.resetGameHandler}>Reset race</button>
        </div>
      </div>
    );
  }
}