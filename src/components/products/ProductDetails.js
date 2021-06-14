import { Button , Card, CardMedia, makeStyles} from '@material-ui/core';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRemoteData, putRemoteData } from '../../store/product';

function ProductDetails(props) {

  const fetchProducts = (e) => {
    e && e.preventDefault();
    props.get();
  }

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, []);

  const useStyles = makeStyles({
    root: {
      maxWidth: "100vw",
      padding: "8px",
      margin: "auto"
    },
    productGrid: {
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
      textDecorationLine: "none"
    }
  });

  const classes = useStyles();

  return (
    <main>
      <p>product details: {props.match.params.id}</p>
      {props.prodReducer.products
        .filter(product => props.match.params.id === product._id)
        .map(product => {
          return (
            <Card className={classes.root}>
              <h1>{product.name}</h1>
              <p>Category {product.category}</p>
              <CardMedia
                className={classes.media}
                image={product.url}
                title={product.name} />
              <p>Inventory {product.inventory}</p>
              <p>description {product.description}</p>
              <p>${product.price}</p>
              <Button color="secondary" onClick={() => props.addToCart(product)}>Buy</Button>
            </Card>
          )
        })
      }
    </main>
  )
}

const mapStateToProps = state => ({
  prodReducer: state.prodReducer,
  catReducer: state.catReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(putRemoteData(product, true)),
  get: () => dispatch(getRemoteData())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);