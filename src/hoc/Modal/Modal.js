import classes from './Modal.module.css';
import React from 'react'

function Modal(props) {
    return (
        <div className={classes.modal}>
           {props.children} 
        </div>
    )
}

export default Modal;
