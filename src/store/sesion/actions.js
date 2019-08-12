/** Archivo que contiene las acciones de los personajes */

import { LOGOUT } from './consts';
import { LOGIN_INIT, LOGIN_SUCCESS, LOGIN_ERROR } from './consts';
import { GET_USERS_API_URL } from './APIsURL';
import { getUsers } from './server';
import { loginUser } from '../../services/loginService.js';


export const logout = () => {
    return dispatch => {
        dispatch({type: LOGOUT})
    }
}

export const loginAction = user => {
    return dispatch => {
        dispatch({ type: LOGIN_INIT});
        getUsers(GET_USERS_API_URL)
        .then( response => {
            let exists = false;
            let activeUser;
            for (let userService of response.data ) {
                if( userService.email === user.email) {
                    exists = true;
                    activeUser = userService;
                    break;
                }
            }
            if(exists) {
                loginUser(activeUser);
                console.log("el super usuario ", activeUser)
                dispatch({type: LOGIN_SUCCESS, payload: activeUser})
            } else {
                dispatch({type: LOGIN_ERROR})
            }
        })
        .catch(error => {
            dispatch({type: LOGIN_ERROR})
        })
        
    }
}