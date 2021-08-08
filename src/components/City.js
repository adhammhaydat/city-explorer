import React, { Component } from 'react'
import Main from './Main'
import { Card } from 'react-bootstrap'

export class City extends Component {
  
  
  
   
  
  render() {
    return (
      <>
        {/* <Card style={{ width: '18rem' ,alignItems:'center',height:'30rem',margin:'1rem '}}>
        <Card.Img style={{ width: '16rem',height:'40vh' }} 
        // variant="top" src={this.props.image_url}
          />
        <Card.Body>
          <Card.Title>{this.props.cityName}</Card.Title>
          <Card.Text>
          <span>{this.props.lat}</span>
          <span>{this.props.lon}</span>

          </Card.Text>
        </Card.Body>
      </Card> */}
          {console.log("sdfsdf",this.props)}
        </>
    )
  }
}

export default City
