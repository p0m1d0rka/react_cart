import React, { Component } from 'react';
import {Row, Col, Button} from 'react-bootstrap';

class Cart extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }
  render(){
    return(
      <Row key={this.props.item.id}>
        <Col md={3}>
          <span>
            { this.props.item.name }
          </span>
        </Col>
        <Col md={3}>
          <span>
            { this.props.item.price }
          </span>
        </Col>
        <Col md={3}>
          <Button bsStyle='info' onClick={this.props.clickAdd}>+</Button>
          
          <span>
            { this.props.amount }
          </span>
          <Button bsStyle='info' onClick={this.props.clickDec}>-</Button>
          
        </Col>
        <Col md={3}>
          <span>
            { this.props.item.price * this.props.amount }
          </span>
        </Col>
      </Row>
    
    )
  }
}

export default Cart;