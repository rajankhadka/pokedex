import React, { useEffect, useState } from 'react'
import classes from './Moves.module.css';

function Moves(props) {
    const [naturalMoves, setNaturalMoves] = useState([]);
    const [machineMoves, setMachineMoves] = useState([]);
    const [tutorMoves, setTutorMoves] = useState([]);
    const [eggMoves, setEggMoves] = useState([]);

    useEffect(() => {
        let natural = [];
        let machince = [];
        let tutor = [];
        let egg = [];
        props.moves.forEach(move => {
            switch (move['version_group_details'][0]['move_learn_method'].name) {
                case 'egg':
                    egg.push(move.move.name);
                    break;
                case 'machine':
                    machince.push(move.move.name);
                    break;
                case 'tutor':
                    tutor.push(move.move.name);
                    break;
                case 'level-up':
                    natural.push(move.move.name);
                    break;
                default:
                    break;
            }   
        });
        setEggMoves(prevState => [...egg]);
        setMachineMoves(prevState => [...machince]);
        setNaturalMoves(prevState => [...natural]);
        setTutorMoves(prevState => [...tutor]);
    },[props.moves])

    return (
        <div className={classes.moves}>
            {/* natural moves */}
            {
                naturalMoves.length > 0
                &&
                <>
                    <div className={classes.moves__head}>
                        <p>Natural Moves</p>
                    </div>
                    <div className={ classes.moves__body}>
                        {naturalMoves.map((move, index) => <p key={index}>{ move}</p>)}
                    </div>
                </>
                
            }

            {/* machine moves */}

            {
                machineMoves.length > 0
                &&
                <>
                    <div className={classes.moves__head}>
                        <p>Machine Moves</p>
                    </div>
                    <div className={ classes.moves__body}>
                        {machineMoves.map((move, index) => <p key={index}>{ move}</p>)}
                    </div>
                </>
                
            }

            {/* tutor moves */}

            {
                tutorMoves.length > 0
                &&
                <>
                    <div className={classes.moves__head}>
                        <p>Tutor Moves</p>
                    </div>
                    <div className={ classes.moves__body}>
                        {tutorMoves.map((move, index) => <p key={index}>{ move}</p>)}
                    </div>
                </>
                
            }


            {/* egg moves */}

            {
                eggMoves.length > 0
                &&
                <>
                    <div className={classes.moves__head}>
                        <p>Egg Moves</p>
                    </div>
                    <div className={ classes.moves__body}>
                        {eggMoves.map((move, index) => <p key={index}>{ move}</p>)}
                    </div>
                </>
                
            }

        </div>
    )
}

export default Moves
