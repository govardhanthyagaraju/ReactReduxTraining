import * as dataService from '../../core/dataService';
import { enviroment } from '../../config/env.dev';
import { setLoading } from './commonActions';

const STORE_USER = 'STORE_USER';
const REMOVE_USER = "REMOVE_USER";

const storeUser = (user) => ({
    type: STORE_USER, user
});

const removeUser = () => ({
    type: REMOVE_USER
});

const signIn = (email, password) => {
    return (dispatch) => {
        dispatch(setLoading(true));
        console.log(email);
        const data = { email, password, returnSecureToken: true };
        dataService.post(`${enviroment.SIGN_IN}=${enviroment.WEBAPIKEY}`, data)
            .then(res => {
                console.log('Login Success', res);
                localStorage.setItem('user', JSON.stringify(res.data));
                dispatch(storeUser(res.data));
                dispatch(setLoading(false));
            })
            .catch(err => {
                console.log('Login Failure', err);
            });
    }
}

const signUp = (email, password) => {
    const data = { email, password, returnSecureToken: true };
    dataService.post(`${enviroment.SIGN_UP}=${enviroment.WEBAPIKEY}`, data)
        .then(res => {
            console.log('Login Success', res);
            localStorage.setItem('user', JSON.stringify(res.data));
            //dispatchEvent(storeUser(user));
        })
        .catch(err => {
            console.log('Login Failure', err);
        });
}

export {
    storeUser, STORE_USER,
    removeUser, REMOVE_USER,
    signIn, signUp
}