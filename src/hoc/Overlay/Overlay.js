import React from 'react'
import classes from './Overlay.module.css';

function Overlay(props) {
    return (
        <div className={classes.overlay}>
            <div className={classes.overlay__left}>
                {props.children}
            </div>
            
            <div
                className={classes.overlay__right}
                onClick={props.sidebarExpandHandler}
            >

            </div>
        </div>
    )
}

export default Overlay
