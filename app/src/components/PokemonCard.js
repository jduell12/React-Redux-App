import React from 'react';

import {StyledCard} from '../styles/StyledCard'

const PokemonCard = props => {
    const {pokemon} = props;
    const {entry_number, pokemon_species} = pokemon;
    const {name, url} = pokemon_species;
    return (
        <StyledCard>
            <p>{entry_number}</p>
            <h3 id="pokemonName">{name}</h3>
        </StyledCard>
    )
}

export default PokemonCard;