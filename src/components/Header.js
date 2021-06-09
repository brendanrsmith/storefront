import { AppBar, Button, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

function Header(props) {

  const useStyles = makeStyles({
    toolbar: {
      background: "#efefef",
    },
    cart: {
      textAlign: "right"
    }
  })
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar} >
          <Grid container>
            <Grid item xs>
              <Button href="#">
                <Typography variant="h5">Storefront</Typography>
              </Button>
            </Grid>
            <Grid item xs className={classes.cart}>
              <Button href="#">
                <Typography>Cart({props.cartReducer.cart.length})</Typography>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  cartReducer: state.cartReducer
});

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
