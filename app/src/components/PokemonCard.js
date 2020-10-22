import React from 'react';
import PokemonInfo from './PokemonInfo'

// import {connect} from 'react-redux'

// import {fetchTypes} from '../store/actions'

import {StyledCard} from '../styles/StyledCard'

const PokemonCard = props => {
    const {pokemon} = props;
    const {entry_number, pokemon_species} = pokemon;
    const {name} = pokemon_species;

    return (
        <StyledCard>
           <PokemonInfo number={entry_number} name={name} />
           <div className="pokeImg">
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${entry_number}.png`} alt={name}/>
            </div> 
        </StyledCard>
    )
}



// const mapStateToProps = state => {
//     return{
//         pokemonTypes: state.pokemonTypes
//     }    
// }

// export default connect(mapStateToProps, {fetchTypes})(PokemonCard);

export default PokemonCard;