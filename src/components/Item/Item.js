import React, { Component } from 'react'
import {Col, Button} from 'react-bootstrap'

class Item extends Component{
  constructor(props){
    super(props);
    this.props = props;
  }
  
  render(){
    return(
    <Col xs={2} key={`col-${this.props.data_value.id}`}>
      <h3>{this.props.data_value.name}</h3>
      <img src="http://lorempixel.com/318/180"alt='good img'/>
      <Button key={`btn-buy-${this.props.data_value.id}`} bsStyle='info' onClick={this.props.click}>Купить!</Button>
    </Col>
    )
  }
}

Item.defaultProps = {
  data: []
}

export default Item;
