import * as actionTypes from './Types';

const storeCartItem = (res) => {
    return {
        type: actionTypes.ADDCARTITEM,
        value: res
    }
};
const cartItemCount = (res) => {
    return {
        type: actionTypes.CARTITEMCOUNT,
        value: res
    }
};
const removeCartItem = (res) => {
    return {
        type: actionTypes.REMOVECARTITEM,
        value: res
    }
};
const updateCartItem = (res, newValue) => {
    return {
        type: actionTypes.UPDATECARTITEM,
        value: {value: res, updatedValue: +newValue}
    }
};
export { storeCartItem, cartItemCount, removeCartItem , updateCartItem}
