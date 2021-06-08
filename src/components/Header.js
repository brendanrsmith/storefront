import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

function Header() {

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h5">Storefront</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  )
}

export default Header;