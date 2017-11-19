import { Set } from 'immutable';
import { 
  ITEM_ADD_TO_CART,
  ITEM_REMOVE_FROM_CART_ONE,
  ITEM_REMOVE_FROM_CART_ALL,
} from '../constants/actionConstants';
import data from '../components/data/items'


const initValue = new Set(data);



const items = (state = initValue, action) => {
	switch (action.type) {
		case ITEM_ADD_TO_CART:
			return state;
		case ITEM_REMOVE_FROM_CART_ONE:
			return state;
		default:
			return state;
	}
};

export default items;