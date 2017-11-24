import {
  ITEM_ADD_TO_CART,
  ITEM_REMOVE_FROM_CART,
} from '../constants/actionConstants';

export const to_cart = (item_id, amount) =>{
  if (amount > 0) {
    return {
      type: ITEM_ADD_TO_CART,
      item_id: {
        id: item_id,
        amount: amount,
      }
    }
  } else {
    return {
      type: ITEM_REMOVE_FROM_CART,
      item_id: {
        id: item_id,
        amount: amount,
      },
    }
  }
}
