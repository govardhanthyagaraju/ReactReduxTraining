// Controlled and Uncontrolled Component
import React from 'react';

import ShowErrors from './showError';
import queryString from 'querystringify';

class Checkout extends React.Component {
    state = { name: '' }
    emailRef = null;

    nameValidtors = {
        required: true, minlength: { length: 5 }
    };

    SubmitData(e) {
        e.preventDefault();
        console.log(this.state.name);
        console.log(this.emailRef.value);
        console.log('form submitted', this.state);
    }

    // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
    static getDerivedStateFromProps(newProps) {
        const params = (queryString.parse(newProps.location.search));
        if (params.name) {
            return { name: params.name };
        }
        return null;
    }


    render() {
        console.log(queryString.parse(this.props.location.search));
        return (
            <form onSubmit={(e) => this.SubmitData(e)}>
                {/* Controlled input field */}
                <label>Name: </label>
                <input type="text"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.currentTarget.value })}>
                </input>
                <ShowErrors value={this.state.name} validators={this.nameValidtors} />
                {/* Uncontrolled input field */}
                <label>Email: </label>
                <input type="text" ref={(r) => this.emailRef = r} />

                <button>Submit</button>
            </form>
        );
    }
}

export default Checkout;