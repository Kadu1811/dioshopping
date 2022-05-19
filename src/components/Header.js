import React from 'react';
import { Logo } from './styles.js';
import { Grid } from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Logo href="/">QUEERWISH</Logo>
            <Cart />   
        </Grid>
    )
}

export default Header;
