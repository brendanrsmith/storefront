import { Button, List, ListItem, makeStyles, Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { putRemoteData } from '../../store/product';
import { Link } from 'react-router-dom';

function ShoppingCart(props) {

  const useStyles = makeStyles({
    root: {
      maxWidth: "80vw",
      padding: "8px",
      margin: "5vh auto"
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    media: {
      paddingTop: '56.25%',
      height: 140,
    },
    link: {
      textDecoration: "none",
    },
    remove: {
      justifySelf: "right",
    },
    li: {
      justifyContent: "space-between",
    },
    checkout: {
      width: "30%",
      justifyContent: "center",
      marginLeft: "35%"
    },
    total: {
      textAlign: "right",
      marginTop: "16px"
    },
  });
  const classes = useStyles();
  const total = props.cartReducer.cart.reduce((acc, val) => {
    return acc + val.price;
  }, 0);

  return (
    <Paper className={classes.root}>
      <Typography variant="h5">Order Summary</Typography>
      <List>
        {props.cartReducer.cart.map(item => {
          return (
            <ListItem className={classes.li} key={`${item._id}:${item.inventory}`}>
              <Link className={classes.link} to={`/products/${item._id}`}>
                <Button color="primary">
                  <Typography variant="body1">{item.name}</Typography>
                </Button>
              </Link>
              <Typography variant="body2">{item.description}</Typography>
              <Typography variant="body1">${item.price}</Typography>
              <Button className="remove" size="small" variant="contained" color="secondary" onClick={() => props.removeFromCart(item)}>Remove</Button>
            </ListItem>
          )
        })}
      </List>
      <Typography className={classes.total} variant="h6">Total: ${total}</Typography>
      <Button className={classes.checkout} variant="contained" color="primary">Checkout</Button>
    </Paper>
  )
}


const mapStateToProps = state => ({
  cartReducer: state.cartReducer,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (product) => dispatch(putRemoteData(product, false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
