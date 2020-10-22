import {
    FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, 
    FETCH_TYPES_START, FETCH_TYPES_SUCCESS, FETCH_TYPES_FAILURE
} from '../actions'

const initialState = {
    isLoading: false, 
    pokemonList: [],
    error: '',
    pokemonImageUrl: '',
    pokemonTypes: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                pokemonList: action.payload,
                isLoading: false
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case FETCH_TYPES_START:
            return {
                ...state,
                isLoading: true, 
                error: '',
            }
        case FETCH_TYPES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pokemonTypes: action.payload
            }
        case FETCH_TYPES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: 
            return state
    }
}