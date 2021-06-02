import { POKEMON } from '../../actionTypes';

const initialState = {
    pokemons:[], 
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
        
        default:
            return state;
    }
}


export default pokemonsgetReducers;