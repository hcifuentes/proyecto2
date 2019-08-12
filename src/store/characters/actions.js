/** Archivo que contiene las acciones de los personajes */

import { GET_CHARACTERS_INIT, GET_CHARACTERS_SUCCESS, GET_CHARACTERS_ERROR } from './consts';
import { GET_CHARACTERS_API_URL } from './APIsURL';
import { getCharacters } from './server';

export const getCharactersAction = url => {
    return dispatch => {
        dispatch({type: GET_CHARACTERS_INIT});
        getCharacters(url ? url : GET_CHARACTERS_API_URL ) 
        .then( response => {
            dispatch({type: GET_CHARACTERS_SUCCESS, payload: response})
        }).catch( error => {
            dispatch({type: GET_CHARACTERS_ERROR})
        })
    }
}