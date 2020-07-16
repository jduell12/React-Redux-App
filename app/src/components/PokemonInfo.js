import React from 'react';

import {StyledTopInfo} from '../styles/StyledCard'

const PokemonInfo = props => {
    const {number, name} = props;
    return (
        <div className="pokeInfo">
            <StyledTopInfo>
                <p>{number}</p>
                <h3 id="pokemonName">{name}</h3>
            </StyledTopInfo>
            <p>Height</p>
        </div>
    )
}

export default PokemonInfo;