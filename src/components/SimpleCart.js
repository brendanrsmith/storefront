import { Button, Grid, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { removeFromCart } from '../store/cart';

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
          <div>
            <p>{item.name}</p>
            <Button onClick={() => props.removeFromCart(item)}>x</Button>
          </div>
        )
      })}
    </Grid>
  )
}

const mapStateToProps = state => ({
  cartReducer: state.cartReducer,
  prodReducer: state.prodReducer,
});

const mapDispatchToProps = { removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
