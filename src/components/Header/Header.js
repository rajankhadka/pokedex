import React,{useState,useEffect} from 'react'
import classes from './Header.module.css';

import pokeBall from '../../asset/pokemon_ball.png';

//icons
import { Close, FilterList, Menu, Search } from '@material-ui/icons';

//redux
import {connect } from 'react-redux';
import { searchPokemon } from '../../redux/actions/pokemongetAction';

//react router
import { useHistory } from "react-router-dom";
import Modal from '../../hoc/Modal/Modal';
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';

function Header(props) {
    const [filter, seTfilter] = useState('name');

    const [modalClose, setModalClose] = useState(false);

    const modalCloseHandler = () => setModalClose(false);
    const modalOpenHandler = () => setModalClose(true);

    const headerHistory = useHistory();

    const [search, setSearch] = useState('');
    useEffect(() => {
        const pokemons = (JSON.parse(window.localStorage.getItem('pokemons')));
        const searchedPokemons = [];

        if (search.length > 0) {

            switch (filter) {
                case 'name':
                    pokemons.forEach(pokemon => {
                        if ((pokemon.name.search(search.toLowerCase()) >= 0) && pokemon.image) {
                            searchedPokemons.push(pokemon)
                        }
                    })
                    break;
                
                default:
                    break;
            }

            
            headerHistory.push('/');
        }
        
        props.searchPokemonAction(searchedPokemons);
        
    }, [search,filter]);

    return (
        <div className={classes.header}>
            <div className={classes.header__left}>
                <Menu
                    style={{
                        color: 'white',
                        fontSize: '35px'
                    }}
                    onClick={props.sidebarExpandHandler}
                />
                <img
                    className={classes.header__pokeball__img}
                    src={pokeBall}
                    alt='poke ball'
                />
            </div>

            <div className={classes.header__right}>
                <input className={classes.header__right__input}
                    type='text'
                    placeholder={`Search by ${filter}`}
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />

                <div className={classes.header__search}>
                    <Search style={{ color: 'whitesmoke', fontSize: '30px' }}/>
                </div>

                {/* <div className={classes.end}>
                    <div className={classes.end__body}>
                        <FilterList
                            onClick={modalOpenHandler}
                            style={{ color: 'whitesmoke', fontSize: '30px' }} />
                    </div>    
                </div> */}
            </div>

            {
                modalClose && 
                <Modal>
                    <div className={classes.filter}>

                        <div className={classes.close}>
                            <Close
                                onClick={modalCloseHandler}
                                style={{
                                    cursor:'pointer',
                                    color: 'whitesmoke',
                                    fontSize: '30px'
                                }}
                            />
                        </div>
                        <div className={classes.form}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend" style={{color:'white',marginBottom:'20px'}}>Search By</FormLabel>
                                <RadioGroup style={{color:'white'}} aria-label="gender" name="gender" value={filter} onChange={(event) => seTfilter(event.target.value)}>
                                    <FormControlLabel
                                        value="name"
                                        control={<Radio />}
                                        label="Name"
                                    />
                                    <FormControlLabel value="location" control={<Radio />} label="Location" />
                                    <FormControlLabel value="habitat" control={<Radio />} label="Habitat" />
                                </RadioGroup>
                            </FormControl>

                            {/* <Button style={{ marginTop: '10px' }}
                                variant='contained'
                                onClick={}
                            >
                                Submit
                            </Button> */}
                        </div>
                        
                    </div>
                </Modal>
            }
        </div>
    )
}
const mapStateToProps = state => {
    return {
        searchPokemons: state.pokemonsgetReducers.searchPokemon,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       searchPokemonAction: (data) => dispatch(searchPokemon(data)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
