import React from 'react';

const PokemonCard = props => {
    const {pokemon} = props;
    const {entry_number, pokemon_species} = pokemon;
    const {name, url} = pokemon_species;
    return (
        <div>
            <p>{entry_number}</p>
            <h3>{name}</h3>
            <p>{url}</p>
        </div>
    )
}

export default PokemonCard;