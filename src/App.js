import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Grid, Row, Button} from 'react-bootstrap';
import './App.css';
import Item from './components/Item/Item'
import Cart from './components/Cart/Cart'
import data from './components/data/items'

class App extends Component {
  constructor(){
    super();
    this.state = {itemsInCart: []};
  }
  
  incInCart = (e, id) => {
    for(let i in this.state.itemsInCart){
      if (this.state.itemsInCart[i].id === id){
        this.state.itemsInCart[i].amount ++

        this.setState({
          itemsInCart: this.state.itemsInCart
        })
        return true;
      }
    }
    return false;
  }

  addToCart = (e, id) => {

    if(this.incInCart(e, id)){
      return true;
    }

    for(let i in data){
      if (data[i].id === id){
        this.state.itemsInCart.push(data[i])
        
            this.setState({
              itemsInCart: this.state.itemsInCart
            });
      }
    }
  }

  decInCart = (e, id) => {
    for(let i in this.state.itemsInCart){
      if (this.state.itemsInCart[i].id === id){
        this.state.itemsInCart[i].amount --

        if (this.state.itemsInCart[i].amount < 1){
          this.state.itemsInCart.splice(i,1)
        }
        this.setState({
          itemsInCart: this.state.itemsInCart
        })
        return true;
      }
    }
  }

  sendOrder = () => {
    let order = {
      user_id: 123,
      order: this.state.itemsInCart,
      total: this.count_total()
    }
    console.log(JSON.stringify(order))
  }

  count_total = () => {
    return (
      this.state.itemsInCart.map((el)=>{
        return(el.amount * el.price);
      }).reduce((val1, val2)=>{
        return(val1 + val2);
      }, 0)
    )
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          { this
            .props
            .items
            .map((value, index, iterator) => {
              return(<Item data_value={value} key={`item-${value.id}`} />)
            }
          ) }
          {/* <Item data={data} onClick={this.addToCart}/> */}
        </Row>
        <Cart itemsInCart={this.state.itemsInCart} incItem={this.incInCart} decItem={this.decInCart}/>
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
 
// export default App;
export default connect((state) => {
  return {
    items: state.items
  };
},
(dispatch) => {
  return {
  };
})(App);

