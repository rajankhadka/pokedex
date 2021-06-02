import classes from '../../Pages/DetailPage/DetailPage.module.css';
import axios from 'axios';
import React, { useState,useEffect} from 'react'

function EggGroup(props) {

    const [group, setGroup] = useState([]);
    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/egg-group/`)
            .then(groups => {
                // console.log(groups.data);
                groups.data.results.forEach(group => {
                    axios.get(group.url)
                        .then(data => {
                            const pokemonGroups = (data.data['pokemon_species'])
                            let foundgroup = (pokemonGroups.find(pokemon => props.name.toLowerCase() === pokemon.name.toLowerCase()));
                            if (foundgroup) {
                                setGroup(prevState => {
                                    return [...prevState, group.name]
                                })
                            }
                        })
                })
            })
    }, []);

    let groups = '';

    if (group.length > 0) {
        group.forEach(g => {
            groups+=g+' , '
        })
    }
    return (
        
            <div className={classes.profile__value}>
                <p>{groups }</p>
            </div>)
}

export default EggGroup
