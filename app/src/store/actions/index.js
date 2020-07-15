import axios from 'axios';

//gets pokemon data from api
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchPokemon = () => {
    return dispatch => {
        dispatch({type: FETCH_DATA_START});

        axios
            .get("https://pokeapi.co/api/v2/pokedex/kanto")
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }   
}