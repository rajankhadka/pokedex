import React,{useState,useEffect} from 'react';
import classes from './DetailPage.module.css';
import axios from 'axios';
import Image from '../../components/Image/Image';
import EggGroup from '../../components/EggGroup/EggGroup';
import AttackDamage from '../../components/AttackDamage/AttackDamage';
import Moves from '../../components/Moves/Moves';

function DetailPage(props) {
    console.log('[DetailPage.js]', props);
    const [pokemonDetail, setPokemonDetail] = useState(null);
    useEffect(() => {
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.location.state.id}`)
            .then(data => {
                // console.log(data.data);
                setPokemonDetail(prevState => {
                    return {
                        abilities: data.data.abilities,
                        location: data.data.location_area_encounters,
                        moves: data.data.moves,
                        name: data.data.species.name,
                        image: data.data.sprites.other['dream_world']['front_default'],
                        stats: data.data.stats,
                        types: data.data.types,
                        weight: data.data.weight,
                        forms: data.data.forms[0].url,
                        height: data.data.height
                    }
                })
            })
            .catch(err => console.log(err));

    }, [props.location.state.id]);

    let type = null;
    let abilities = '';
    if (pokemonDetail) {
        type = pokemonDetail.types.map(type => (
            <div key={type.slot} className={classes.typeName}>
                <p>{ type.type.name }</p>
            </div>
        ))

        pokemonDetail.abilities.forEach(ability => {
            abilities += ability.ability.name + ' , '
        })
    }

    console.log('pokemonDetail', pokemonDetail);
    return (
        pokemonDetail && 
        <div className={classes.detailPage}>
            <div className={classes.detailPage__content}>
                <div className={classes.detailPage__content__header}>
                    <h2>{ pokemonDetail.name }</h2>
                </div>

                {/* info start  */}
                <div className={classes.detailPage__content__info}>
                    <div className={classes.detailPage__content__info__left}>
                        <Image
                            image={pokemonDetail.image}
                            forms={pokemonDetail.forms}
                        />
                    </div>

                    <div className={classes.detailPage__content__info__right}>
                        <div className={classes.type}>
                            <p>type</p>
                            <div>
                                {type}
                            </div>
                            
                        </div>

                        <div className={classes.hp}>
                            <p>Hp</p>
                            <div>
                                <div style={{width:`${pokemonDetail.stats[0].base_stat}px` }}>
                                    {pokemonDetail.stats[0].base_stat}
                                </div>
                                
                            </div>
                        </div>

                        <div className={classes.attack}>
                            <p>Attack</p>
                            <div>
                                <div style={{width:`${pokemonDetail.stats[1].base_stat}px` }}>
                                    {pokemonDetail.stats[1].base_stat}
                                </div>
                                
                            </div>
                        </div>

                        <div className={classes.defence}>
                            <p>Defence</p>
                            <div>
                                <div style={{width:`${pokemonDetail.stats[2].base_stat}px` }}>
                                    {pokemonDetail.stats[2].base_stat}
                                </div>
                                
                            </div>
                        </div>

                        <div className={classes.speed}>
                            <p>Speed</p>
                            <div>
                                <div style={{width:`${pokemonDetail.stats[3].base_stat}px` }}>
                                    {pokemonDetail.stats[3].base_stat}
                                </div>
                                
                            </div>
                        </div>

                        <div className={classes.spAttack}>
                            <p>Sp. Attack</p>
                            <div>
                                <div style={{width:`${pokemonDetail.stats[4].base_stat}px` }}>
                                    {pokemonDetail.stats[4].base_stat}
                                </div>
                                
                            </div>
                        </div>

                        <div className={classes.spDefence}>
                            <p>Sp. Defence</p>
                            <div>
                                <div style={{width:`${pokemonDetail.stats[5].base_stat}px` }}>
                                    {pokemonDetail.stats[5].base_stat}
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                {/* info end  */}

                {/* profile start  */}
                
                <div className={classes.detailPage__content__profile}>
                    <div className={classes.detailPage__content__profile__header}>
                        <h3>Profile</h3>
                    </div>

                    <div className={classes.detailPage__content__profile__body}>
                        <div className={classes.profile__row}>
                            <div className={classes.profile__height}>
                                <p className={classes.profile__name}>Height : </p>
                                <p className={classes.profile__value}>{ parseInt(pokemonDetail.height)/10} m </p>
                            </div>

                            <div className={classes.profile__weight}>
                                <p className={classes.profile__name}>weight : </p>
                                <p className={classes.profile__value}>{ parseInt(pokemonDetail.weight)/10} kg</p>
                            </div>
                        </div>
                        

                        <div className={classes.profile__row}>
                            
                            <div className={classes.profile__ability}>
                                <p className={classes.profile__name}>Ability : </p>
                                {/* {
                                    pokemonDetail && pokemonDetail.abilities.map((ability,index) => (
                                        <div className={classes.profile__value} key={index}>
                                            <p>{ability.ability.name }</p>
                                        </div>
                                    ))
                                } */}
                                {
                                    pokemonDetail
                                    &&
                                    <div className={classes.profile__value}>
                                        <p>{ abilities }</p>
                                    </div>
                                }
                            </div>
                            
                            <div className={classes.profile__ability}>
                                <p className={classes.profile__name}>Egg Group : </p>
                                {
                                    pokemonDetail && <EggGroup name={ pokemonDetail.name}/>
                                }
                            </div>

                        </div>
                        

                       
                    </div>
                </div>

                {/* profile end */}

                {/* attack profile start */}
                
                <div className={classes.attackanddamage}>
                    <div className={classes.attackanddamage__header}>
                        <p>Fighting Profile</p>
                    </div>

                    
                    <AttackDamage types={ pokemonDetail.types}/>
                    
                    
                </div>

                {/* attack profile end */}


                {/* moves start */}

                <div className={classes.moves}>
                    <div className={classes.moves__header}>
                        Moves
                    </div>

                    <Moves moves={ pokemonDetail.moves} />
                </div>

                {/* moves end */}
            </div>
        </div>
    )
}

export default DetailPage
