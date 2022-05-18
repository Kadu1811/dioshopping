import React from 'react';
import { Logo, Button } from './headerstyles';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Logo href="/">STORE</Logo>
            <Link to="/">
                <Button>Home</Button>
            </Link>
            <Link to="/contato">
                <Button>Contato</Button>
            </Link>
            <Cart />   
        </Grid>
    )
}

export default Header;
