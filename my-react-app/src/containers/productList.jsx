import React from 'react';
import Product from '../components/Product';
import * as dataService from '../core/dataService';
import { enviroment } from '../config/env.dev';
import { connect } from 'react-redux';
import { addToCart } from '../_store/actions/cartActions';
import { setLoading } from '../_store/actions/commonActions';

class ProductList extends React.Component {

    state = { pList: [] };
    componentDidMount() {
        this.getProductData();
    }

    getProductData() {
        this.props.setLoading(true);
        dataService.get(enviroment.PRODUCT_API)
            .then(
                res => {
                    this.setState({ pList: res.data });
                    this.props.setLoading(false);
                }
            )
            .catch(
                err => {
                    console.log('error', err);
                    this.props.setLoading(false);
                }
            )
    };

    addToCart(item) {
        console.log("Product Log", this.props);
        this.props.addItem(item);
        this.props.history.push('/cart');
    }

    render() {
        const { pList } = this.state;
        if (this.props.loading) { return <p>Loading</p> }
        return (
            <div className="row">
                {pList.map((prod, i) => <Product pData={prod}
                    key={prod.productId}
                    cCode={this.props.currCurrency}
                    btnAddtoCart={() => this.addToCart(prod)} />)}
            </div>
        );
    }
};

//Connect(how to connect,what to connect)
const mapStatetoProps = (state) => ({
    currCurrency: state.currency,
    loading: state.loading
});
const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addToCart(item)),
    setLoading: (s) => dispatch(setLoading(s))
})


export default connect(mapStatetoProps, mapDispatchToProps)(ProductList);