import { Button, Card } from '@material-ui/core';
import { connect } from 'react-redux';
import { putRemoteData } from '../../store/product';
import { Link } from 'react-router-dom';

function ShoppingCart(props) {
  return (
    <div>
      <p>Shopping Cart</p>
      {props.cartReducer.cart.map(item => {
        return (
          <Card key={`${item._id}:${item.inventory}`}>
            <Link to={`/products/${item._id}`} className="link">
              <Button color="primary">{item.name}</Button>
            </Link>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <Button variant="small" onClick={() => props.removeFromCart(item)}>x</Button>
          </Card>
        )
      })}
      <h3>Total:</h3>
      <p> here will go all the checkout info...</p>
    </div>
  )
}


const mapStateToProps = state => ({
  cartReducer: state.cartReducer,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (product) => dispatch(putRemoteData(product, false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
