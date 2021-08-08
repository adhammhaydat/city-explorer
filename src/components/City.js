import React, { Component } from 'react'
import Main from './Main'

export class City extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.cityName}</h1>
        <h1>{this.props.lon}</h1>
        <h1>{this.props.lat}</h1>
      </div>
    )
  }
}

export default City
