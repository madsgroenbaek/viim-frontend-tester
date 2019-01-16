import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        7 Mountains
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;