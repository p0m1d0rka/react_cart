import { List } from 'immutable';
import {
	CART_REMOVE_ALL, 
	ITEM_ADD_TO_CART,
	ITEM_REMOVE_FROM_CART,
} from '../constants/actionConstants';

const initValue = new List();

const cart = (state = initValue, action) => {

	switch (action.type) {
		case ITEM_ADD_TO_CART:
			const id = action.item_id.id;
			const amount = action.item_id.amount;
			let is_update = false;
			const new_list =  state.map(
				el => {
					if(el.id === id){
						is_update = true;
						return {id: id, amount: el.amount + amount}
					} else {
						return {id: el.id, amount: el.amount}
					}
				}
			)
			if (is_update === false){
				return new_list.push({id: id, amount: amount});
			} else {
				return new_list;
			}
		case ITEM_REMOVE_FROM_CART:
			const elem_for_dec = state.filter(
				el => {
				return el.id === action.item_id.id
				}
			).first()
			const elem_for_dec_index = state.indexOf(elem_for_dec)

			if (elem_for_dec.amount + action.item_id.amount > 0){
				return state.update(elem_for_dec_index, val => {
					return {id: val.id, amount: val.amount + action.item_id.amount}
				});
			} else {
				return state.delete(elem_for_dec_index);
			}
			
		case CART_REMOVE_ALL:
			return state;
		default:
			return state;
	}
};

export default cart;