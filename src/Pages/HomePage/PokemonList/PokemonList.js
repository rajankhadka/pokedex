import classes from './PokemonList.module.css'
import React from 'react'
import CardView from '../../../components/CardView/CardView'

function PokemonList(props) {
    return (
        props.pokemons.map(pokemon => (
            <div key={pokemon.id}
                className={classes.pokemonList}
                onClick={() => props.pageChangeRoute(pokemon.name,pokemon.id)}
            >
                <CardView 
                    key={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                />
            </div>
     
        )
    )
    )
}

export default PokemonList
