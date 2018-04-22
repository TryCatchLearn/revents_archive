import { SIGN_OUT_USER, LOGIN_USER } from './authConstants';
import { closeModal } from '../modals/modalActions'

export const login = (creds) => {
    return dispatch => {
        dispatch({type: LOGIN_USER, payload: {creds}})
        dispatch(closeModal())
    }
}

export const logout = () => {
    return {
        type: SIGN_OUT_USER
    }
}