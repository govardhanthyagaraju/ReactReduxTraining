import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './components/checkout';
import Demo from './Demo';
import ProductList from './containers/productList';
import ErrorPage from './components/errorPage';
import Cart from './containers/cart';
import Login from './containers/login';

class AppRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Demo} exact={true} />
                <Route path="/products" component={ProductList} />
                <Route path="/checkout/:orderId" component={Checkout} />
                <Route path="/cart" component={Cart} />
                <Route path="/login" component={Login} />
                <Route component={ErrorPage} />
                {/* Always write Error page at the last in sequence */}
            </Switch>
        );
    }
}

export default AppRouter;