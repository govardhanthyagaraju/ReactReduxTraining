import { SET_LOADING } from "../actions/commonActions";

const commonReducer = (state = false, action) => {
    switch (action.type) {
        case SET_LOADING:
            return action.status;
        default:
            return state;
    }
}

export default commonReducer;