import classes from './AttackDamage.module.css'
import React, { useState,useEffect} from 'react'
import axios from 'axios';

function AttackDamange(props) {

    const [attackdamage, setAttackdamage] = useState([]);

    useEffect(() => {
        props.types.forEach(type => {
            let url = (type.type.url);
            axios.get(url)
                .then(response => {
                    let data = response.data;
                    // console.log(data['damage_relations']);
                    setAttackdamage(prevState => [...prevState,data['damage_relations']])
                })
        })
    }, [])
    
    //attack
    let double_attack = [];
    let half_attack = [];
    let no_attack = [];

    //damage
    let double_damage = [];
    let half_damage = [];
    let no_damage = [];

    if (attackdamage.length > 0) {
        attackdamage.forEach(ad => {
            ad.double_damage_to.length > 0 && ad.double_damage_to.forEach(dA => {
                double_attack.push(dA.name)
            });

            ad.half_damage_to.length> 0 && ad.half_damage_to.forEach(hA => {
                half_attack.push(hA.name)
            });

            ad.no_damage_to.length > 0 && ad.no_damage_to.forEach(nA => {
                no_attack.push(nA.name)
            });

            ad.double_damage_from.length > 0 && ad.double_damage_from.forEach(dD => {
                double_damage.push(dD.name)
            });

            ad.half_damage_from.length > 0 && ad.half_damage_from.forEach(dD => {
                half_damage.push(dD.name)
            });

            ad.no_damage_from.length > 0 && ad.no_damage_from.forEach(dD => {
                no_damage.push(dD.name)
            });
        })
    }

    // console.log(double_attack, half_attack, no_attack, double_damage, half_damage, no_damage);

    return (
        <div className={classes.attackdamage}>
            {/* attack */}
            <div className={classes.attack}>
                <div className={classes.attack__header}>
                    <p>Attack</p>
                </div>

                <div className={classes.attack__body}>
                    <div className={classes.attack__body__double}>
                        <p>x2</p>
                        {
                            double_attack.map((dA, index) => 
                                <p key={index}>{ dA}</p>
                            ) 
                        }
                    </div>

                    <div className={classes.attack__body__half}>
                        <p>x0.5</p>

                        {
                            half_attack.map((dA, index) => 
                                <p key={index}>{ dA}</p>
                            ) 
                        }
                    </div>

                    <div className={classes.attack__body__no}>
                        <p>x0</p>

                        {
                            no_attack.map((dA, index) => 
                                <p key={index}>{ dA}</p>
                            ) 
                        }
                    </div>
                </div>
            </div>

            {/* damage */}

            <div className={classes.attack}>
                <div className={classes.attack__header}>
                    <p>Damage</p>
                </div>

                <div className={classes.attack__body}>
                    <div className={classes.attack__body__double}>
                        <p>x2</p>
                        {
                            double_damage.map((dA, index) => 
                                <p key={index}>{ dA}</p>
                            ) 
                        }
                    </div>

                    <div className={classes.attack__body__half}>
                        <p>x0.5</p>

                        {
                            half_damage.map((dA, index) => 
                                <p key={index}>{ dA}</p>
                            ) 
                        }
                    </div>

                    <div className={classes.attack__body__no}>
                        <p>x0</p>

                        {
                            no_damage.map((dA, index) => 
                                <p key={index}>{ dA}</p>
                            ) 
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AttackDamange
