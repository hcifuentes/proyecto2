/** Archivo que contiene las acciones de los personajes */

import { GET_EPISODES_INIT, GET_EPISODES_SUCCESS, GET_EPISODES_ERROR, RELOAD_EPISODES } from './consts';
import { GET_EPISODES_API_URL } from './APIsURL';
import { getEpisodes } from './server';

export const getEpisodesAction = url => {
    return dispatch => {
        dispatch({type: GET_EPISODES_INIT});
        getEpisodes(url ? url : GET_EPISODES_API_URL ) 
        .then( response => {
            dispatch({type: GET_EPISODES_SUCCESS, payload: response})
        }).catch( error => {
            dispatch({type: GET_EPISODES_ERROR})
        })
    }
}

export const reloadAction = () => {
    return dispatch => {
        dispatch({type: RELOAD_EPISODES});
    }
}