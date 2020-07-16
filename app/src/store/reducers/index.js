import {
    FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE
} from '../actions'

const initialState = {
    isLoading: false, 
    pokemonList: [],
    error: '',
    pokemonImageUrl: '',
    pokemonAbilities: [] 
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
        default: 
            return state
    }
}