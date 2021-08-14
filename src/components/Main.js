import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Weather';
import { Container, Row, Col, Alert } from 'react-bootstrap'
import Movies from './Movies';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lon: '',
      lat: '',
      cityName: "",
      messg: "",
      weatherSt: [],
      desplyErr: false,
      weatherData: [],
      displayWeather: true,
      movisData: [],
      displayMove: false,
    };

  }

  submitHandler = (e) => {

    e.preventDefault();

    let url = `https://us1.locationiq.com/v1/search.php?key=pk.5d26fb6c24e689ebb23ebfd89105b70b&q=${e.target.city.value}&format=json`

    axios.get(url).then(res => {
      let data = res.data[0]
      this.setState({
        cityName: data.display_name,
        lat: `lat: ${data.lat}`,
        lon: `lon: ${data.lon}`,
        mapUrl: `https://maps.locationiq.com/v3/staticmap?key=pk.f7162d9d9da6a0d03a35e52f15d974c8&center=
        ${data.lat},${data.lon}&size=300x300&zoom=14&markers=icon:large-red-cutout&path=fillcolor:%2390EE90|weight:2|
        color:blue|enc:}woiBkrk}Mb@iKtCCEhBsD|C`,
        desplyErr: false
      })
      this.getWeathere(data.lat, data.lon)
      this.getMovies(data.display_name)
    })
      .catch((error) => {
        // handle error
        this.setState({
          desplyErr: true,
          messg: ` the city not found`
        })
      })
  }

  getWeathere = (lat, lon) => {

    let url = `http://localhost:8000/weather/${lat}/${lon}`
    axios.get(url).then(res => {

      this.setState({
        weatherData: res.data,
        displayWeather: true,
      })
    })
      .catch((error) => {
        // handle error
        this.setState({
          desplyErr: true,
          messg: error + ` weather Not Found for the location`
        })

      })
  }

  getMovies = (city) => {

    let url = `http://localhost:8000/movies/${city.split(',')[0]}`
    axios.get(url).then(res => {

      this.setState({
        movisData: res.data,
        displayMove: true,
      })
      console.log(res.data);
    })
      .catch((error) => {
        // handle error
        this.setState({
          desplyErr: true,
          messg: error + ` movies Not Found for the location`
        })

      })
  }
  render() {
    return (
      <div>
        <Container fluid style={{ width: "20rem", marginTop: "3rem" }}>
          <Row>
            <Col>

              {this.state.desplyErr && <Alert variant='danger'>
                <span>{this.state.messg}</span>
              </Alert>}
            </Col>
          </Row>
        </Container>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "" }}>


          <Form onSubmit={(e) => { this.submitHandler(e) }} style={{ display: "flex", alignItems: "flex-start" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" name='city' style={{ width: "" }} placeholder="Explore Citys" />

            </Form.Group>
            <Button style={{ paddingRight: "1rem" }} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card style={{ width: '20rem', alignItems: 'center', height: '20rem', margin: '1rem ', border: "" }}>
            <Card.Img variant="top" src={this.state.mapUrl} style={{ width: '20rem', height: "10rem" }} />
            <Card.Body>
              <Card.Title style={{ color: "red" }}>{this.state.cityName}</Card.Title>
              <Card.Text>
                {this.state.lat}


              </Card.Text>
              <Card.Text>
                {this.state.lon}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {this.state.displayWeather && <>  {this.state.weatherData.map((ele, index) => {
          return (<Weather key={index} dateOfCountry={ele.date} description={ele.description} />)
        })} </>}
        <div style={{
          display: 'flex', flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start"
        }}>
          {this.state.displayMove && this.state.movisData && <>  {this.state.movisData.map((ele, index) => {
            return (<Movies key={index} title={ele.title} popularity={ele.popularity} overview={ele.overview}
              imgSrc={ele.image_url} displayCard={this.state.displayWeather}
            />)
          })} </>}
        </div>

      </div>
    );
  }
}

export default Main;
