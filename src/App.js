import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Grid, Row, Button} from 'react-bootstrap';
import Item from './components/Item/Item'
import Cart from './components/Cart/Cart'
import { to_cart } from './actions/carts.actions'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.get_item_by_id = this.get_item_by_id.bind(this);
    this.sendOrder = this.sendOrder.bind(this);
    this.count_total = this.count_total.bind(this);
    this.addToCart = this.addToCart.bind(this);
    
    this.state = {
      itemsInCart: [],  // не используется
    };
  }

  get_item_by_id(id) {
    const { items } = this.props;
    return items.filter(x => {
      return x.id === id;
    }).first();
  }

  sendOrder() {
    const { cart } = this.props;

    const order = cart && {
      user_id: 123,
      order: cart,
      total: this.count_total(),
    };
    console.log(JSON.stringify(order));
  }

  count_total() {
    const { cart } = this.props;    
    let total = 0;

    cart.forEach(el => {
      total += this.get_item_by_id(el.id).price * el.amount;
    });
    return total;
  }

  addToCart(e, item_id, amount) {
    const { to_cart } = this.props;
    to_cart(item_id, amount);
  };

  render() {
    const {
      items,
      cart,
    } = this.props;

    return (
      <Grid fluid={true}>
        <Row>
          {items.map((value, index, iterator) => {
              return(
                <Item 
                  data_value={value} 
                  key={`item-${value.id}`} 
                  click={e => this.addToCart(e, value.id, 1)}
                />
              )
            })
          }
        </Row>
        {cart.map((value, index, iterator) => {
            const item = this.get_item_by_id(value.id);
            return(
              <Cart 
                item={item} 
                amount={value.amount} 
                key={`cart-for-${item.id}`} 
                clickAdd={e => this.addToCart(e, item.id, 1)} 
                clickDec={e => this.addToCart(e, item.id, -1)}
              />
            )
          })
        }
        <Row>
          <span>Total:</span> {this.count_total()}
        </Row>
        <Row>
          <Button 
            bsStyle='success'
            onClick={this.sendOrder}
          >Оформить
          </Button>
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

