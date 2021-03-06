import React, { Component } from 'react';
import classes from './HomePage.module.css';

//redux
import {connect } from 'react-redux';
import { getallPokemon,removeallPokemon } from '../../redux/actions/pokemongetAction';

//axios
import axios from 'axios';
import PokemonList from './PokemonList/PokemonList';

class HomePage extends Component{

    componentWillUnmount() {
        window.localStorage.setItem('pokemons',JSON.stringify(this.props.pokemons))
        this.props.removeallPokemonAction();
        console.log('component will unmount');
        console.log(this.props.pokemons.length);
    }

    
    componentDidMount() {
        console.log('component did mount');
        console.log(this.props.pokemons.length);

        axios({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/??offset=0&limit=1118',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {

            response.data.results.forEach(pokemon => {
                axios({
                    method: 'GET',
                    url: pokemon.url,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(data => {
                        this.props.getallPokemonAction(
                            {
                                name: data.data.species.name,
                                // image: data.data.sprites.versions['generation-iv']['diamond-pearl']['front_default'],
                                id: data.data.id,
                                image: data.data.sprites.other['official-artwork']['front_default'],
                            }
                        
                        )
                    })
                    .catch(err => console.log(err))

            });

            
        })
            
            .catch(error => console.log(error));
        
        
    }

    pageChangeRoute = (name,id) => {
        console.log(name);
        this.props.history.push({
            pathname: `/${name}`,
            state:{id: id}
        })
    }

    

    render() {
        let renderHomePage = null;

        if ((this.props.pokemons.length === 1118) && !(this.props.searchPokemons.length > 0)) {
            renderHomePage = <PokemonList
                            pokemons={this.props.pokemons}
                            pageChangeRoute={this.pageChangeRoute}
                        />
        } else if ((this.props.searchPokemons.length > 0)) {
            renderHomePage=<PokemonList
                            pokemons={this.props.searchPokemons}
                            pageChangeRoute={this.pageChangeRoute}
                        />
        } else {
            renderHomePage=<h1>Loading</h1>
        }

        return (
            <div className={classes.homepage}>
                {renderHomePage}
            </div>
            
        )
    }

    

}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemonsgetReducers.pokemons,
        searchPokemons: state.pokemonsgetReducers.searchPokemon,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getallPokemonAction: (data) => dispatch(getallPokemon(data)),
        removeallPokemonAction: () => dispatch(removeallPokemon()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);