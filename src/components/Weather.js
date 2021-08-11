import React, { Component } from 'react'
import { Container,Row,Col, Card } from 'react-bootstrap'

export class Weather extends Component {

  render() {
    return (
      <div>
        
        <Container fluid style={{textAlign:"center"}}>
          <Row> 
            <Col>

            <Card>
        <Card.Body><span>{this.props.dateOfCountry}</span>
              <span>{this.props.description}</span></Card.Body>
        </Card>
            <br/>
              
              </Col>
          </Row>
        </Container>
        
      </div>
    )
  }
}

export default Weather
