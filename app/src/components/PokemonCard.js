import React, {useEffect} from 'react';
import PokemonInfo from './PokemonInfo'

import {StyledCard} from '../styles/StyledCard'

const PokemonCard = props => {
    const {pokemon, getPokemonImg, pokemonImageUrl} = props;
    const {entry_number, pokemon_species} = pokemon;
    const {name} = pokemon_species;

    return (
        <StyledCard>
           <PokemonInfo number={entry_number} name={name} />
            <div className="pokeImg">
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${entry_number}.png`}/>
            </div>
        </StyledCard>
    )
}

export default PokemonCard;