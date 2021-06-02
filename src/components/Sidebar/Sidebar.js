import { Menu } from '@material-ui/icons';
import React from 'react'
import classes from './Sidebar.module.css';
import pokeball from '../../asset/pokemon_ball.png'

function Sidebar(props) {

    let sidebarClassName = [classes.sidebar];
    if (props.sidebarExpand) {
        sidebarClassName.push(classes.sidebar__expand);
    }

    return (
        <div
            className={sidebarClassName.join(' ')}
            style={{
                height:!props.sidebarExpand ? '92vh' : '100vh',
                width: props.sidebarExpand ? '20%' : '5%'
            }}
        >
            {
                props.sidebarExpand && 
                <div className={classes.sidebar__header}>
                    <div>
                        
                        <Menu
                            style={{
                                color: 'white',
                                fontSize: '35px'
                            }}
                            onClick={props.sidebarExpandHandler}
                        />
                        <img
                            className={classes.header__pokeball__img}
                            src={pokeball}
                            alt='poke ball'
                        />
                    </div>
                </div>
            }
            <div className={classes.sidebar__body}>
                Home
            </div>
        </div>
    )
}

export default Sidebar
