import React, { useState } from 'react'
import classes from './Layout.module.css';

//components
import Overlay from '../../hoc/Overlay/Overlay';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

//react router 
import { Route,Switch } from 'react-router-dom';
import HomePage from '../../Pages/HomePage/HomePage';
import DetailPage from '../../Pages/DetailPage/DetailPage';

function Layout(props) {

    const [sidebarExpand, setSidebarExpand] = useState(false)

    

    const sidebarExpandHandler = () => setSidebarExpand(prevState => !prevState);

    console.log('[Layout.js]');


    return (
        <div className={classes.layout}>
            <Header sidebarExpandHandler={ sidebarExpandHandler}/>
            <div className={classes.layout__body}>
                
                {/* left item */}
                <Sidebar sidebarExpand={sidebarExpand}
                    sidebarExpandHandler={sidebarExpandHandler}
                />
                
                

                {/* right item  */}
                <div className={classes.layout__body__right}>
                    <Switch>
                        <Route path='/:name' component={DetailPage} />
                        <Route path='/' component={HomePage} />
                    </Switch>
                </div>
            </div>

            {
                sidebarExpand && 
                <Overlay sidebarExpandHandler= {sidebarExpandHandler}>
                    <Sidebar
                        sidebarExpand={sidebarExpand}
                        sidebarExpandHandler={sidebarExpandHandler}
                    />
                </Overlay>
            }
        </div>
    )
}

export default Layout;
