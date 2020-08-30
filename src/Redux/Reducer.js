import * as actionTypes from './Types';

const INITIAL_STATE = {
    count: 0,
    cartItems: []
};
const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADDCARTITEM:
            let alterItem, itemArr, counter;
            alterItem = action.value;
            alterItem.value = alterItem.value + 1;
            const duplicate = state.cartItems.filter((item) => item.id === action.value.id);
            if (duplicate.length > 0) {
                itemArr = [alterItem];
                counter = state.count;
            } else {
                itemArr = [...state.cartItems, alterItem];
                counter = state.count + 1
            }
            return {
                ...state,
                cartItems: itemArr,
                count: counter
            }

        case actionTypes.CARTITEMCOUNT:
            return {
                ...state,
                count: state.count + 1
            }

        case actionTypes.REMOVECARTITEM:
            let deletedItem, count;
            deletedItem = state.cartItems.filter((item) => {
                return item !== action.value
            })
            if (state.count > 0) {
                count = state.count - 1
            } else {
                count = state.count
            }
            return {
                ...state,
                cartItems: deletedItem,
                count: count
            }
        case actionTypes.UPDATECARTITEM:
            const updatedobj = state.cartItems.map(obj =>
                obj.id === action.value.value.id ? { ...obj, value: action.value.updatedValue } : obj
            );
            return {
                ...state,
                cartItems: updatedobj
            }
        default: return { ...state };
    }

}
export default CartReducer;
