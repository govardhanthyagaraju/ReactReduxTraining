import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

//const appStore = createStore(currencyReducer);
const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appStore = createStore(
    rootReducer, /* preloadedState, */
    composeEnhancers(applyMiddleware(...middlewares))
);

export default appStore;