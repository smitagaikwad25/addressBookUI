import React, { Component } from 'react';
import './App.css';
import RegisterUser from './registerUser/registerUser'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; import { render } from '@testing-library/react';
export class App extends Component {
  render() {
    return (
      <div>
        <RegisterUser />
      </div>
    );
  }
}

export default App;
