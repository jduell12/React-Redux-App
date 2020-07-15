import React from 'react';
import {connect} from 'react-redux'

const PokemonList = props => {
    return(
        <div>
            <h3>In list</h3>
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

export default connect(mapStateToProps, {})(PokemonList);