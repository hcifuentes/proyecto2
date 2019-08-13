import { initialState } from "./initialState";
import { GET_USERS_INIT, GET_USERS_SUCCESS, GET_USERS_ERROR,
         POST_USER_INIT, POST_USER_SUCCESS, POST_USER_ERROR, 
         PUT_USER_INIT, PUT_USER_SUCCESS, PUT_USER_ERROR } from "./consts";

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

        case POST_USER_INIT: { return { ...state, signUpLoading: true}}
        case POST_USER_SUCCESS: {
            return {
                ...state,
                users: state.users.concat(action.payload),
                postUserMessage: 'Usuario creado correctamente',
                signUpLoading: false,
                signUpError: false
            }
        }

        case POST_USER_ERROR: {
            return {
                ...state,
                postUserMessage: 'Error al crear usuario, por favor reintente',
                signUpLoading: false,
                signUpError: true
            }
        }

        case PUT_USER_INIT: { return { ...state, putUserLoading: true}}
        case PUT_USER_SUCCESS: {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.payload.id) {
                        return action.payload;
                    }
                    return user;
                }),
                putUserLoading: false
            }
        }

        case PUT_USER_ERROR: {
            return {
                ...state,
                putUserLoading: false,
                putUserError: true
            }
        }

        default : {
            return state
        }
    }
}