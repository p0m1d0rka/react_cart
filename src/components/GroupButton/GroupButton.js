import React, { Component } from 'react'
import {Col, Button} from 'react-bootstrap'

// import {} 

class GroupButton extends Component{
  constructor(props){
    super(props);
    this.props = props;
  }

  render(){
    return(
      this.props.data.map((el=>{
        return(
          <Col xs={2} key={el.id}>
            <h3>{el.name}</h3>
            <img src="http://lorempixel.com/318/180" alt='good img'/>
            <Button key={el.id} bsStyle='info' onClick={e => this.props.onClick(e, el.id) }>Купить!</Button>
          </Col>
        )
      }))
    )
  }
}

GroupButton.defaultProps = {
  data: []
}

export default GroupButton;