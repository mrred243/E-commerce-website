import React from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import Product from './Product/Product'
import useStyles from './styles'
import {  Navbar } from '../index'







const Products = ({ products, onAddToCart, totalItems }) => {
    const classes = useStyles()
    
    return(
        <div>
            {/* <div className={classes.toolbar} />                     */}
            <div className={classes.cover}>
                <Navbar totalItems={totalItems} />
                <div>
                <Typography className={classes.supertitle} variant="h2" >Welcome to APO Shop</Typography>

                </div>
            </div>
            <main className={classes.content}>
                <div className={classes.toolbar} />                    
                <Typography className={classes.title} variant="h4" gutterBottom>New Arrivals</Typography> 
                <Grid container justify="center" spacing={4}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} onAddToCart={onAddToCart} />
                        </Grid>
                    )
                    )}
                </Grid>
            </main>
        </div>

    )
}

export default Products;