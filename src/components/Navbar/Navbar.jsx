import React, { useEffect } from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, useScrollTrigger } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/Drawing1.jpeg'
import useStyles from './styles'


const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    let trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 750,
        target: window
        });

    
    return (
        <>
            <AppBar 
                position='fixed' 
                className={classes.appBar}  
                style= {{
                    backgroundColor: location.pathname === '/cart' || trigger ? "white" : "transparent",
                    color: location.pathname === '/cart' || trigger ? "black" : "white",
                    borderBottom: location.pathname === '/cart' || trigger ? '1px solid rgba(0, 0, 0, 0.12)' : '',
                }}
>
                <Toolbar>
                    <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt='Commerce,js' height='35px' className={classes.image} />
                        Apo Shop
                    </Typography>
                    <div className={classes.grow} />
                    { location.pathname !== '/cart' && (
                                        <div className={classes.button}>
                                        <IconButton component={Link} to='/cart' aria-label='ShoppingCart'>
                                            <Badge badgeContent={totalItems} color='secondary'>
                                                <ShoppingCart style={{color: trigger ? "" : "white"}} />
                                            </Badge>
                                        </IconButton>
                                    </div>
                    )}


                </Toolbar>
            </AppBar>   
        </>
    )
}

export default Navbar
