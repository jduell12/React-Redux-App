import {FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from '../actions'

const initialState = {
    isLoading: false, 
    pokemonList: [],
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA_START:
            return {
                ...state,
                isLoading: true
            }
        default: 
            return state
    }
}