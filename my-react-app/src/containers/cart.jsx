import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../components/cartItem';
import { updateCart } from '../_store/actions/cartActions';

class Cart extends React.Component {

    state = { items: [] };

    removeFromCart(item) {
        console.log("Product Log", this.props);
        this.props.removeItem(item);
    }

    updateState(qty, product) {
        let { items } = this.state;
        //find items by id 
        //if exits update qty
        const index = items.findIndex((v) => v.productId === product.productId);
        if (index >= 0) {
            items[index].qty = qty;
        }
        else {
            items.push({ ...product, qty });
        }
        //add items into state
        this.setState({ items });
        console.log(items);
    }

    render() {
        if (this.props.cart.length <= 0) {
            return <div className="alert alert-info">You are is empty</div>
        }
        return (
            <div>
                <table className="table table-bordered .thead-darktable table-hover text-centered">
                    <tbody>
                        {
                            this.props.cart.map(
                                item => <CartItem item={item}
                                    code={this.props.code}
                                    key={item.productId}
                                    notifyChange={(v) => this.updateState(v, item)} />
                            )
                        }
                    </tbody>
                </table>
                <button onClick={() => this.props.updateCart(this.state.items)}>
                    Update Cart
             </button>
            </div>
        );
    }
};

//Connect(how to connect,what to connect)
const mapStatetoProps = (state) => ({
    cart: state.cart,
    code: state.currency
});
const mapDispatchToProps = (dispatch) => ({
    updateCart: (item) => dispatch(updateCart(item))
})
export default connect(mapStatetoProps, mapDispatchToProps)(Cart);
