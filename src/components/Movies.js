import React, { Component } from 'react'
import { Card ,Button} from 'react-bootstrap';

export class Movies extends Component {
  
  
  
  
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.imgSrc} />
          <Card.Body>
            <Card.Title style={{color:"red"}}>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.overview}
            </Card.Text>
            <Button variant="primary">popularity: {this.props.popularity}</Button>
          </Card.Body>
        </Card>
       
        
      </div>
    )
  }
}

export default Movies
