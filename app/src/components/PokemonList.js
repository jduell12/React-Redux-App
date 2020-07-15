import React, {useEffect} from 'react';
import {connect} from 'react-redux'

import {fetchPokemon} from '../store/actions'

const PokemonList = props => {
    const{fetchPokemon, isLoading, pokemonList, error} = props;

    useEffect(() => {
        fetchPokemon();
    }, []);

    return(
        <div>
            {isLoading && <h4>Loading Pokemon List...</h4>}
            {error && <h4 className="error">Something went wrong...{error}</h4>}
            {pokemonList.length > 0 && (
                pokemonList.map(pokemon => {
                    return (<div>{pokemon.pokemon_species.name}</div>)
                })
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        pokemonList: state.pokemonList,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchPokemon})(PokemonList);