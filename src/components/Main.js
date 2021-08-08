import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Form,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      lon:'',
      lat:'',
      cityName:"",
      messg:""
    };
  
  }
  inputHandler=(e)=>{
    this.setState({
      cityName:e.target.value,
      mapUrl:""
    });

  }
  submitHandler=(e)=>{
    
    e.preventDefault();
    
      let url=`https://us1.locationiq.com/v1/search.php?key=pk.60346fba30221450f0bd55e67928ff53&q=${this.state.cityName}&format=json`
    
    axios.get(url).then(res=>{
      let data= res.data[0]
      
      
      this.setState({
        cityName:data.display_name,
        lat:`lat: ${data.lat}`,
        lon:`lon: ${data.lon}`,
        mapUrl:`https://maps.locationiq.com/v3/staticmap?key=pk.f7162d9d9da6a0d03a35e52f15d974c8&center=
        ${data.lat},${data.lon}&size=300x300&zoom=14&markers=icon:large-red-cutout&path=fillcolor:%2390EE90|weight:2|
        color:blue|enc:}woiBkrk}Mb@iKtC\CEhBsD|C`
      })
    
    })
    .catch=(error)=>{
      // handle error
      console.log(error);
    
    }
  }
  render() {
    return (
      <div>
         <div style={{display:"flex",justifyContent:"center",marginTop:"3rem"}}>
      {/* //   <form onSubmit={(e)=>{this.submitHandler(e)}}>
      //     <input style={{width:"20rem"}} type="text" placeholder="Enter city name" onChange={(e)=>{this.inputHandler(e)}}/>
      //     <input type="submit" value="Explore City"/>
      //   </form> */}
        <Form onSubmit={(e)=>{this.submitHandler(e)}} style={{display:"flex",alignItems:"flex-start"}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text"  style={{width:""}} placeholder="Explore Citys" onChange={(e)=>{this.inputHandler(e)}}/>
            
          </Form.Group>
          <Button style={{paddingRight:"1rem"}} variant="primary" type="submit">
            Submit
          </Button>
      </Form>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
       <Card style={{ width: '20rem' ,alignItems:'center',height:'20rem',margin:'1rem ',border:""}}>
        <Card.Img variant="top"  src={this.state.mapUrl} style={{width:'20rem',height:"10rem"}} />
        <Card.Body>
          <Card.Title style={{color:"red"}}>{this.state.cityName}</Card.Title>
          <Card.Text>
         { this.state.lat}
          

          </Card.Text>
          <Card.Text>
          { this.state.lon}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
        {/* <City cityName={this.state.cityName} lon={this.state.lon} lat={this.state.lat}/> */}
        <span>{this.state.messg}</span>
      </div>
    );
  }
}

export default Main;
