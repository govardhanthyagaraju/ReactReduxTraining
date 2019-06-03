import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, UPDATE_CART } from "../actions/cartActions";


// Reducer : function(state,actions) => return updated state

function cartReducer(state = [], action) {
    switch (action.type) {
        case CLEAR_CART:
            return [];
        case ADD_TO_CART:
            return [...state, action.item]; // Spread Operator copies the previous items and add new item at the last. KEEP STATE IMMUNTABLE
        case REMOVE_FROM_CART:
            return state.filter((p) => p.productId != action.id);
        case UPDATE_CART:
            return state.map(
                item => {
                    let c = action.cart.find(i => i.productId === item.productId);
                    console.log(c);

                    if (c) { return c; }
                    return item;
                }
            );
        default:
            return state;
    }
}

export default cartReducer;