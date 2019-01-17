import React from 'react'
import { AppBar, Toolbar, IconButton, Badge } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import HomeIcon from '@material-ui/icons/Home';
import TodayIcon from '@material-ui/icons/Today';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


import Tabs from '../StyledTabs';


const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <div className="header-left-menu-items">
                        <IconButton color="secondary">
                            <HomeIcon />
                        </IconButton>
                        <IconButton color="secondary">
                            <RssFeedIcon />
                        </IconButton>
                        <IconButton color="secondary">
                            <ShoppingBasketIcon />
                        </IconButton>
                        <IconButton color="secondary">
                            <TodayIcon/>
                        </IconButton>
                    </div>
                    <Tabs />
                    <div className="header-right-menu-items">
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            aria-haspopup="true"
                            color="inherit">
                            <AccountCircle/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;


