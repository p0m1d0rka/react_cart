import React, { Component } from 'react';
import {Row, Col, Button} from 'react-bootstrap';

class Cart extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }
  render(){
    return(
      this.props.itemsInCart.map((el)=>{
        return(
          <Row key={el.id}>
            <Col md={3}>
              <span>
                { el.name }
              </span>
            </Col>
            <Col md={3}>
              <span>
                { el.price }
              </span>
            </Col>
            <Col md={3}>
              <Button bsStyle='info' onClick={e => this.props.incItem(e, el.id) }>+</Button>
              <span>
                { el.amount }
              </span>
              <Button bsStyle='info' onClick={e => this.props.decItem(e, el.id) }>-</Button>
            </Col>
            <Col md={3}>
              <span>
                { el.price * el.amount }
              </span>
            </Col>
         </Row>
        )
      })
    )
  }
}

export default Cart;