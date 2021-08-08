import React, { Component } from 'react';
import axios from 'axios';
import City from './City';
import { Card } from 'react-bootstrap';

export class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      lon:'',
      lat:'',
      cityName:""
    };
  
  }
  inputHandler=(e)=>{
    this.setState({
      cityName:e.target.value
    });

  }
  submitHandler=(e)=>{

    e.preventDefault();
    let url=`https://us1.locationiq.com/v1/search.php?key=pk.60346fba30221450f0bd55e67928ff53&q=${this.state.cityName}&format=json`
    let mapUrl=`https://maps.locationiq.com/v3/staticmap?key=pk.f7162d9d9da6a0d03a35e52f15d974c8&center=${this.state.lat},${this.state.lon}&size=600x600&zoom=14&path=fillcolor:%2390EE90|weight:2|color:blue|enc:}woiBkrk}Mb@iKtC\CEhBsD|C`;
    axios.get(url).then(res=>{
      let data= res.data[0]
      axios.get(mapUrl).then(res=>{
      
      this.setState({
        cityName:data.display_name,
        lat:data.lat,
        lon:data.lon,
      })
    
    })}
    )}
  render() {
    return (
      <div>
        <form onSubmit={(e)=>{this.submitHandler(e)}}>
          <input type="text" placeholder="Enter city name" onChange={(e)=>{this.inputHandler(e)}}/>
          <input type="submit" value="Explore City"/>
        </form>
        <div>
       <Card style={{ width: '18rem' ,alignItems:'center',height:'15rem',margin:'1rem ',border:"2px dashed"}}>
        <Card.Img variant="top"  />
        <Card.Body>
          <Card.Title>{this.state.cityName}</Card.Title>
          <Card.Text>
          {this.state.lat}
          

          </Card.Text>
          <Card.Text>
          {this.state.lon}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
        {/* <City cityName={this.state.cityName} lon={this.state.lon} lat={this.state.lat}/> */}
      </div>
    );
  }
}

export default Main;
