import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import { Field } from '../Field';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Horse Race Application</h1>
        </header>
        <div className="Race-field ">
          <Field />
        </div>
        <div className="Button-div">
          <button>Start race</button>
          <button>Reset race</button>
        </div>
      </div>
    );
  }
}