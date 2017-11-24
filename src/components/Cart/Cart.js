import React from 'react';
import {
  Row,
  Col,
  Button,
} from 'react-bootstrap';

const Cart = ({ item, amount, clickAdd, clickDec }) => {
  return(
    <Row key={item.id}>
      <Col md={3}>
        <span>{item.name}</span>
      </Col>
      <Col md={3}>
        <span>{item.price}
        </span>
      </Col>
      <Col md={3}>
        <Button bsStyle='info' onClick={clickAdd}>+</Button>
        <span>{amount}</span>
        <Button bsStyle='info' onClick={clickDec}>-</Button>
      </Col>
      <Col md={3}>
        <span>{item.price * amount}</span>
      </Col>
    </Row>
  )
}

export default Cart;