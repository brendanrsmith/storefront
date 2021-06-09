import { Grid, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';

function SimpleCart(props) {
  const useStyles = makeStyles({
    cart: {
      zIndex: 100,
      position: "fixed",
      right: "16px",
      top: "64px",
      width: "80px",
      backgroundColor: "#eee",
      opacity: "0.5"
    }
  });

  const classes = useStyles();

  return (
    <Grid item xs className={classes.cart}>
      {props.cartReducer.cart.map(item => {
        return (
          <p>{item.name}</p>
        )
      })}
    </Grid>
  )
}

const mapStateToProps = state => ({
  cartReducer: state.cartReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);