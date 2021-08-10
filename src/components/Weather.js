import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'

export class Weather extends Component {

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <h2>{this.props.dateOfCountry}</h2>
              <h2>{this.props.description}</h2>
            </Col>
          </Row>
        </Container>
        
      </div>
    )
  }
}

export default Weather
