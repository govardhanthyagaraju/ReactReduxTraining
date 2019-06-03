import React from 'react';
import { connect } from 'react-redux';
import { signIn, signUp } from '../_store/actions/userActions';

class Login extends React.Component {
    state = { email: '', password: '' };
    render() {
        return (
            <div>
                <form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label className="sr-only">Email address</label>
                    <input
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.currentTarget.value })}
                        type="email" id="inputEmail" className="form-control" placeholder="Email address" />
                    <label className="sr-only">Password</label>
                    <input
                        value={this.state.password}
                        onChange={e => this.setState({ password: e.currentTarget.value })}
                        type="password" id="inputPassword" className="form-control" placeholder="Password" />
                    <button className="btn btn-lg btn-primary btn-block" type="button"
                        onClick={() => this.props.signIn(this.state.email, this.state.password)}>
                        Sign In</button>
                    <button className="btn btn-lg btn-primary btn-block" type="button"
                        onClick={() => this.props.signUp(this.state.email, this.state.password)}>
                        Sign Up</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signIn: (e, p) => dispatch(signIn(e, p)),
    signUp: (e, p) => dispatch(signUp(e, p)),
});

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);