import classes from './Evolutions.module.css'
import React, { useState,useEffect} from 'react'
import axios from 'axios';

function Evolutions(props) {
    // console.log('[evolution.js]', props);
    // const [evolName, setEvolName] = useState([]);
    const [evolDetail, setEvolDetail] = useState([]);
    const evols = [];
    let id = 0;
    const evlfunc = (evol) => {

        if (evol.length === 0) {
            return;
        } else {
            id++;
            evols.push({
                id,
                name:evol[0].species.name
            });
            // setEvolName(prevState => [...prevState,evol[0].species.name])
            return evlfunc(evol[0].evolves_to);
        }
    }

    useEffect(() => {
        axios.get(props.species)
            .then(response => {
                let data = response.data;
                axios.get(data['evolution_chain'].url)
                    .then(res => {
                        let evolutionchain = res.data;
                        // setEvolName(prevState => [...prevState, evolutionchain.chain.species.name]);
                        evols.push({
                            id:0,
                            name:evolutionchain.chain.species.name
                        });
                        evlfunc(evolutionchain.chain.evolves_to);
                        evols.forEach(evol => {
                            axios.get(`https://pokeapi.co/api/v2/pokemon/${evol.name.toLowerCase()}/`)
                                .then(pok => {

                                    setEvolDetail(prevState => [
                                        ...prevState,
                                        {
                                            id: evol.id,
                                            name: pok.data.species.name,
                                            image: pok.data.sprites.other['dream_world']['front_default'] ? pok.data.sprites.other['dream_world']['front_default'] : undefined,
                                        }
                                    ])
                                })
                                .catch(err => console.log(err));
                        });
                        
                    })
            })
            .catch(error => console.log(error));
        return () => {
            setEvolDetail([]);
        }
    }, []);

    let evolRender = null;
    if (evolDetail.length > 0) {
        if (evolDetail.length === 1) {
            evolRender = <p>No Evolution</p>
        } else {
            evolRender = [];
            for (let i = 0; i < evolDetail.length - 1; i++){
                let initial = evolDetail.find(evol => evol.id === i);
                let finial = evolDetail.find(evol => evol.id === (i + 1));
                evolRender.push(
                    <div className={classes.main} key={`${id}${initial.name}`}>
                        <div className={classes.left}>
                            {
                                !(initial.image === undefined)&& 
                                <img src={initial.image && initial.image} alt='pokemon'
                                    style={{
                                        width: '100px',
                                        height:'100px'
                                    }}
                                />
                            }
                            <p>{ initial.name}</p>
                        </div>
                        <div className={classes.middle}>
                            <p>{'---->'}</p>
                        </div>
                        <div className={classes.right}>
                            <img
                                src={ finial.image && finial.image}
                                alt='pokemon'
                                style={{
                                    width: '100px',
                                    height:'100px'
                                }}
                            />
                            <p>{ finial.name}</p>
                        </div>
                    </div>
                );
            }
        }
    }

    return (
        <div className={classes.evolution}>
            {evolRender}
        </div>
    )
}

export default Evolutions;
