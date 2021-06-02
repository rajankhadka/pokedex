import classes from './CardView.module.css'
import React from 'react'

function CardView(props) {
    return (
        <div className={classes.cardview} key={props.id}>
                
            <img className={classes.cardview__img}  src={props.image} alt="image" />
            <p style={{ marginTop: '10px', marginBottom:'10px'}}>{props.name}</p>
        </div>
    )
}

export default CardView
