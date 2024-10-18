import * as actionTypes from './types';
import * as authService from '../../auth';

// Register
export const register = ({ registerData }) => async (dispatch) => {
    dispatch({
        type: actionTypes.REQUEST_LOADING,
    });
    const data = await authService.register({ registerData });

    if (data.success === true) {
        dispatch({
            type: actionTypes.REGISTER_SUCCESS,
        });
    } else {
        dispatch({
            type: actionTypes.REQUEST_FAILED,
        });
    }
}

export const login = ({ loginData }) => async (dispatch) => {
    dispatch({
        type: actionTypes.REQUEST_LOADING,
    });
    const data = await authService.login({ loginData });

    if (data.success === true) {
        const auth_state = {
            current: data.result,
            isLoggedIn: true,
            isLoading: false,
            isSuccess: true,
        };
        window.localStorage.setItem('auth', JSON.stringify(auth_state));
        window.localStorage.removeItem('isLogout');
        dispatch({
            type: actionTypes.REQUEST_SUCCESS,
            payload: data.result,
        });
    } else {
        dispatch({
            type: actionTypes.REQUEST_FAILED,
        })
    }
}