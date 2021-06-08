import { AppBar, Button, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

function Header() {

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
                <Typography>Cart</Typography>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  )
}

export default Header;