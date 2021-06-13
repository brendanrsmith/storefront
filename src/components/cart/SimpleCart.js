import { Button, Card, Grid, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { putRemoteData } from '../../store/product';

function SimpleCart(props) {
  const useStyles = makeStyles({
    cart: {
      zIndex: 100,
      position: "fixed",
      right: "16px",
      top: "64px",
      width: "140px",
      backgroundColor: "#eee",
      opacity: "0.5"
    },
    card: {
      display: "flex",
      padding: "8px"
  }
  });

const classes = useStyles();

return (
  <Grid item xs className={classes.cart}>
    {props.cartReducer.cart.map(item => {
      return (
        <Card key={`${item._id}:${item.inventory}`} className={classes.card}>
          <p>{item.name}</p>
          <Button variant="small" onClick={() => props.removeFromCart(item)}>x</Button>
        </Card>
      )
    })}
  </Grid>
)
}

const mapStateToProps = state => ({
  cartReducer: state.cartReducer,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (product) => dispatch(putRemoteData(product, false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
