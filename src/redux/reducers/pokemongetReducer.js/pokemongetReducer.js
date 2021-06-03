import { POKEMON } from '../../actionTypes';

const initialState = {
    pokemons: [],
    searchPokemon:[],
}

const pokemonsgetReducers = (state = initialState, action) => {
    switch (action.type){
        case POKEMON.POKEMON_GET:
            return {
                ...state,
                pokemons:[...state.pokemons,action.payload.data]
            }
        
        case POKEMON.POKEMON_REMOVE:
            return {
                ...state,
                pokemons:[]
            }
        
        case POKEMON.POKEMON_SEARCH:
            return {
                ...state,
                searchPokemon:[...action.payload.data]
            }
        
        default:
            return state;
    }
}


export default pokemonsgetReducers;