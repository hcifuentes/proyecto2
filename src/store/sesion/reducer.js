import { initialState } from "./initialState";
import { LOGIN_INIT, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "./consts";

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGOUT : { 
            return {
                ...state, 
                activeUser: null, 
            }
        }
        case LOGIN_INIT : { return {...state, activeUserLoading: true } }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                activeUser: action.payload,
                activeUserLoading: false,
            }
        }

        case LOGIN_ERROR : {
            return {
                ...state,
                activeUserLoading: false,
                activeUserError: true
            }
        }

        default : {
            return state
        }
    }
}