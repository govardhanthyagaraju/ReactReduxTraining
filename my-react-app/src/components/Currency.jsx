import React from 'react';
import { connect } from 'react-redux';
import { updateCurrency } from '../_store/actions/currencyActions';


class Currency extends React.Component {
    render() {
        const currencies = ['INR', 'GBP', 'USD', 'CAD'];
        return (
            <select onChange={(e) => this.props.changeCurrency(e.currentTarget.value)}>
                {currencies.map
                    (
                        code => <option key={code}>{code}</option>
                    )
                }
            </select>
        );
    }
}

//Connect(how to connect,what to connect)
const mapDispatchToProps = dispatch => ({
    changeCurrency: (c) => dispatch(updateCurrency(c))
});
export default connect(null, mapDispatchToProps)(Currency);
