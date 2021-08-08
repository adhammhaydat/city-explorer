import React, { Component } from 'react';
import axios from 'axios';
import City from './City';

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
    this.setstate({
      cityName:e.target.value
    });

  }
  submitHandler=(e)=>{

    e.preventDefault();
    let url=`https://eu1.locationiq.com/v1/search.php?pk.5d26fb6c24e689ebb23ebfd89105b70b=${this.state.cityName}&q=SEARCH_STRING&format=json`
    axios.get(url).then(res=>{
      let data= res.data[0]

      this.setState({
        cityName:data.display_name,
        lat:data.lat,
        lon:data.lon
      })
    
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={(e)=>this.submitHandler(e)}>
          <input type="text" placeholder="Enter city name" onChange={(e)=>this.inputHandler(e)}/>
          <input type="submit" value="Explore City"/>
        </form>
        <City cityName={this.state.cityName} lon={this.state.lon} lat={this.state.lat}/>
      </div>
    );
  }
}

export default Main;
