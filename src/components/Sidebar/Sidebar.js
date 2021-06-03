import { Explore, Home, Menu } from '@material-ui/icons';
import React,{useRef, useState} from 'react'
import classes from './Sidebar.module.css';
import pokeball from '../../asset/pokemon_ball.png'

import { useHistory} from 'react-router-dom';
function Sidebar(props) {

    const sidebarHistory = useHistory();

    let sidebarClassName = [classes.sidebar];
    if (props.sidebarExpand) {
        sidebarClassName.push(classes.sidebar__expand);
    }


    const siderbarActiveHandler = () => {
        sidebarHistory.push('/');
    }

    return (
        <div
            className={sidebarClassName.join(' ')}
            style={{
                display: window.screen.width < 600 ? (props.sidebarExpand ? 'block' : 'none'): 'block',
                // height:!props.sidebarExpand ? '92vh' : '100vh',
                // width: props.sidebarExpand ? '20%' : '5%'
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
                <div
                    onClick={() => siderbarActiveHandler()}
                >
                    <Home style={{ color: 'white' }} />
                    { props.sidebarExpand && <p>Home</p>}
                </div>


                
            </div>
        </div>
    )
}

export default Sidebar
