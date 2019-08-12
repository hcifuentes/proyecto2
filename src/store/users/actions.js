/** Archivo que contiene las acciones de los personajes */

import { GET_USERS_INIT, GET_USERS_SUCCESS, GET_USERS_ERROR, PUT_USER_INIT, PUT_USER_SUCCESS, PUT_USER_ERROR, POST_USER_INIT, POST_USER_SUCCESS, POST_USER_ERROR } from './consts';
import { GET_USERS_API_URL } from './APIsURL';
import { getUsers, putUser, postUser } from './server';
import { loginUser } from './../../services/loginService';

export const getUsersAction = url => {
    return dispatch => {
        dispatch({type: GET_USERS_INIT});
        getUsers(url ? url : GET_USERS_API_URL ) 
        .then( response => {
            dispatch({type: GET_USERS_SUCCESS, payload: response})
        }).catch( error => {
            dispatch({type: GET_USERS_ERROR})
        })
    }
}

export const updateFavorites = user => {
    console.log("Update user", user);

    return dispatch => {
        dispatch({type: PUT_USER_INIT});
        console.log("999999999999999999999999999999", "putuse")
        putUser(GET_USERS_API_URL + '/'+ user.id, user)
        .then( response => {
            loginUser(user);
            dispatch({type: PUT_USER_SUCCESS , payload: user});
        })
        .catch( error => {
            dispatch({type: PUT_USER_ERROR});
        })
    }
}

export const postFavorites = user => {
    return dispatch => {
        dispatch({type: POST_USER_INIT});
        postUser(GET_USERS_API_URL  + '/'+ user.id, user)
        .then( response => {
            dispatch({type: POST_USER_SUCCESS , payload: user});
        })
        .catch( error => {
            dispatch({type: POST_USER_ERROR});
        })
    }
}

