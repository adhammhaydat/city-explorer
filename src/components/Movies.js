import React, { Component } from 'react'
import { Card ,Button} from 'react-bootstrap';
import { Container,Row,Col } from 'react-bootstrap';

export class Movies extends Component {
  
  render() {
    return (
      <div style={{marginTop:"3rem"}} >
        <Container fluid >
          <Row>
            <Col>
          {this.props.displayCard && this.props.overview &&<>
          <Card style={{ width: '18rem',height:"35rem" }} >
            
          <Card.Img variant="top" src={this.props.imgSrc} style={{ width: '18rem',height:"20rem" }} alt={this.props.title} />
          <Card.Body>
            <Card.Title style={{color:"red"}}>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.overview.substring(0,90)}
            </Card.Text>
            <Button variant="primary">popularity: {this.props.popularity}</Button>
          </Card.Body>
        </Card></>}
        </Col>
        </Row>
       
        
        </Container>
        
      </div>
    )
  }
}

export default Movies
