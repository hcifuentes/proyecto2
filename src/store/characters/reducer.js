import { initialState } from "./initialState";
import { GET_CHARACTERS_INIT, GET_CHARACTERS_SUCCESS, GET_CHARACTERS_ERROR, RELOAD_CHARACTERS } from "./consts";

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case RELOAD_CHARACTERS: {
            return {
                ...state,
                characters: state.characters.filter(item => {
                    if(item) return item;
                })
            }
        }

        case GET_CHARACTERS_INIT : {
            return {
                ...state,
                charactersLoading: true
            }
        }

        case GET_CHARACTERS_SUCCESS : {
            return {
                ...state,
                characters: action.payload.data.results,
                charactersLoading: false,
                charactersCount: action.payload.data.info.count,
                charactersPages: action.payload.data.info.pages,
                charactersNextPage: action.payload.data.info.next,
                charactersPrevPage: action.payload.data.info.prev,
                charactersActualPage: action.payload.config.url
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