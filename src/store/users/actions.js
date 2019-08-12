/** Archivo que contiene las acciones de los personajes */

import { GET_USERS_INIT, GET_USERS_SUCCESS, GET_USERS_ERROR } from './consts';
import { GET_USERS_API_URL } from './APIsURL';
import { getUsers } from './server';

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

