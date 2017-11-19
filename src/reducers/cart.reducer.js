import { List } from 'immutable';
import {
  CART_REMOVE_ALL, 
} from '../constants/actionConstants';

const initValue = new List();



const cart = (state = initValue, action) => {
	switch (action.type) {
		case CART_REMOVE_ALL:
			return state;
		default:
			return state;
	}
};

export default cart;