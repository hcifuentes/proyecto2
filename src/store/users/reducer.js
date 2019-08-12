import { initialState } from "./initialState";
import { GET_USERS_INIT, GET_USERS_SUCCESS, GET_USERS_ERROR } from "./consts";

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_USERS_INIT : { return {...state, usersLoading: true } }
        case GET_USERS_SUCCESS : {
            return {
                ...state,
                users: action.payload.data,
                usersLoading: false,
            }
        }

        case GET_USERS_ERROR : {
            return {
                ...state,
                usersLoading: false,
                usersError: true
            }
        }

        default : {
            return state
        }
    }
}