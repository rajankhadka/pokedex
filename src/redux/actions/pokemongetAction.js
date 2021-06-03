import { POKEMON } from '../actionTypes';

export const getallPokemon = (data) => {
    return {
        type: POKEMON.POKEMON_GET,
        payload: {
            data
        }
    }
}

export const removeallPokemon = () => {
    return {
        type:POKEMON.POKEMON_REMOVE
    }
}

export const searchPokemon = (data) => {
    return {
        type: POKEMON.POKEMON_SEARCH,
        payload: {
            data
        }
    }
}

