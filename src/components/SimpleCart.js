import { Grid, makeStyles } from '@material-ui/core';

function SimpleCart() {
  const useStyles = makeStyles({
    cart: {
      position: "absolute",
      right: "24px",
      top: "68px",
      width: "60px",
      backgroundColor: "pink"
    }
  });

  const classes = useStyles();

  return(
    <Grid item xs className={classes.cart}>
      <p>simple cart</p>
    </Grid>
  )
}

export default SimpleCart;