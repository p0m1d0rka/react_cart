import React from 'react'
import {
  Col,
  Button,
} from 'react-bootstrap'

const Item = ({ data_value, click }) => {
  return(
    <Col 
      xs={2} 
      key={`col-${data_value.id}`}
    >
      <h3>{data_value.name}</h3>
      <img 
        src="http://lorempixel.com/318/180" 
        alt='good img'
      />
      <Button 
        key={`btn-buy-${data_value.id}`} 
        bsStyle='info' 
        onClick={click}
      >Купить!
      </Button>
    </Col>
  )
}

// не используется
// Item.defaultProps = {
//   data: [],
// }

export default Item;


  