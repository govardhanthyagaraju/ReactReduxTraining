const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CLEAR_CART = 'CLEAR_CART';
const UPDATE_CART = 'UPDATE_CART';

const updateCart = (cart) => ({
    type: UPDATE_CART,
    cart
});

const addToCart = (item) => ({
    type: ADD_TO_CART,
    item: { ...item, qty: 1 }
});

const removeItem = (id) => ({
    type: REMOVE_FROM_CART,
    id
});

const clearCart = ({
    type: CLEAR_CART
});

export {
    UPDATE_CART, updateCart,
    ADD_TO_CART, addToCart,
    removeItem, REMOVE_FROM_CART,
    clearCart, CLEAR_CART,
};