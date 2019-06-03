import React from 'react';
import Card from './card';
import ErrorBoundary from './errorBoundary';

//SMART Component - Logical Representation
//Dumb Component - Presentation
class Product extends React.Component {
    checkStock() {
        if (this.props.pData.productStock) {
            return (
                <button className="btn btn-sm btn-primary"
                    onClick={() => this.props.btnAddtoCart()}>Add to Cart</button>
            );
        }
        else {
            return (
                <p className="alert alert-danger">Out of Stock</p>
            );
        }
    }
    render() {
        //http://exploringjs.com/es6/ch_destructuring.html
        const { pData, cCode } = this.props;
        return (
            <ErrorBoundary>
                <Card size="3">
                    <img alt="ProductImg" src={pData.productImage} className="img-thumbnail" />
                    <h4>{pData.productName}</h4>
                    <h4>{cCode} {pData.productPrice}</h4>
                    {this.checkStock()}
                </Card>
            </ErrorBoundary>
        );
    }
}

export default Product;