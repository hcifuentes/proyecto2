import { initialState } from "./initialState";
import { GET_EPISODES_INIT, GET_EPISODES_SUCCESS, GET_EPISODES_ERROR } from "./consts";

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_EPISODES_INIT : {
            const obj = {
                ...state,
                episodesLoading: true
            }
            return obj;
        }

        case GET_EPISODES_SUCCESS : {
            return {
                ...state,
                episodes: action.payload.data.results,
                episodesLoading: false,
                episodesCount: action.payload.data.info.count,
                episodesPages: action.payload.data.info.pages,
                episodesNextPage: action.payload.data.info.next,
                episodesPrevPage: action.payload.data.info.prev
            }
        }

        case GET_EPISODES_ERROR : {
            return {
                ...state,
                episodesLoading: false,
                episodesError: true
            }
        }

        default : {
            return state
        }
    }
}