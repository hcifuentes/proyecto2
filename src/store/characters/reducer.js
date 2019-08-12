import { initialState } from "./initialState";
import { GET_CHARACTERS_INIT, GET_CHARACTERS_SUCCESS, GET_CHARACTERS_ERROR } from "./consts";

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_CHARACTERS_INIT : {
            const obj = {
                ...state,
                charactersLoading: true
            }
            return obj;
        }

        case GET_CHARACTERS_SUCCESS : {
            return {
                ...state,
                characters: action.payload.data.results,
                charactersLoading: false,
                charactersCount: action.payload.data.info.count,
                charactersPages: action.payload.data.info.pages,
                charactersNextPage: action.payload.data.info.next,
                charactersPrevPage: action.payload.data.info.prev
            }
        }

        case GET_CHARACTERS_ERROR : {
            return {
                ...state,
                charactersLoading: false,
                charactersError: true
            }
        }

        default : {
            return state
        }
    }
}