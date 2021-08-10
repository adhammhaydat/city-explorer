import React, { Component } from 'react'
import Main from './components/Main.js'
import Weather from './components/Weather.js'
import Header from './components/Header.js'
// import axios from 'axios';
export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Weather/>
      </div>
    )
  }
}

export default App
