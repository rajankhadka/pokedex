import React from 'react'
import classes from './Header.module.css';

import pokeBall from '../../asset/pokemon_ball.png';

//icons
import { Menu, Search } from '@material-ui/icons';

function Header(props) {
    return (
        <div className={classes.header}>
            <div className={classes.header__left}>
                <Menu
                    style={{
                        color: 'white',
                        fontSize: '35px'
                    }}
                    onClick={props.sidebarExpandHandler}
                />
                <img
                    className={classes.header__pokeball__img}
                    src={pokeBall}
                    alt='poke ball'
                />
            </div>

            <div className={classes.header__right}>
                <input className={classes.header__right__input}
                    type='text'
                    placeholder='Search'
                />

                <div className={classes.header__search}>
                    <Search style={{ color: 'whitesmoke', fontSize: '30px' }}/>
                </div>
            </div>
        </div>
    )
}

export default Header;
