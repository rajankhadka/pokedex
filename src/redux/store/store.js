import { createStore, combineReducers } from 'redux';
import pokemonsgetReducers from '../reducers/pokemongetReducer.js/pokemongetReducer';

const rootReducers = combineReducers({
    pokemonsgetReducers,
})

const configureStore = () => createStore(rootReducers);

export default configureStore;