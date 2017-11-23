import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Grid, Row, Button} from 'react-bootstrap';
import './App.css';
import Item from './components/Item/Item'
import Cart from './components/Cart/Cart'
import { to_cart } from './actions/carts.actions'

class App extends Component {
  constructor(){
    super();
    this.state = {itemsInCart: []};
  }

  get_item_by_id = (id) =>
  {
    return this.props.items.filter(x => {
      return x.id === id;
    }).first()
  }

  sendOrder = () => {
    let order = {
      user_id: 123,
      order: this.props.cart,
      total: this.count_total()
    }
    console.log(JSON.stringify(order))
  }

  count_total = () => {
    let total = 0;
    this.props.cart.forEach( el =>{
      total += this.get_item_by_id(el.id).price * el.amount
    }
    )
    return ( 
      total
    )
  }



	addToCart = (e, item_id, amount) => {
   this.props.to_cart(item_id, amount);
  };


  render() {
    return (
      <Grid fluid={true}>
        <Row>
          { this
            .props
            .items
            .map((value, index, iterator) => {
              return(<Item data_value={value} key={`item-${value.id}`} click={e => this.addToCart(e, value.id, 1)}/>)
            }
          ) }
        </Row>
        { this
          .props
          .cart
          .map((value, index, iterator) => {
            const item = this.get_item_by_id(value.id);
            
            return(<Cart item={item} amount={value.amount} key={`cart-for-${item.id}`} clickAdd={e => this.addToCart(e, item.id, 1 )} clickDec={e => this.addToCart(e, item.id, -1 )}/>)
            }
          ) }
        <Row>
          <span>Total:</span> { this.count_total() }
        </Row>
        <Row>
          <Button bsStyle='success' onClick={ this.sendOrder }>Оформить</Button>
        </Row>
      </Grid>
    );
  }
}
 
export default connect((state) => {
  return {
    items: state.items,
    cart: state.cart,
  };
},
(dispatch) => {
  return {
    to_cart: (item_id, amount) => {
      dispatch(to_cart(item_id, amount));
    },
  };
})(App);

