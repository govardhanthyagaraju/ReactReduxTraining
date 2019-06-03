import { UPDATE_CURRENCY } from "../actions/currencyActions";

// Reducer : function(state,actions) => return updated state

function currencyReducer(state = 'INR', actions) {
    switch (actions.type) {
        case UPDATE_CURRENCY:
            return actions.code;
        default:
            return state;
    }
}

export default currencyReducer;