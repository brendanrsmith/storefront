import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
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
      margin: "auto",
      justifyContent: "center"

    },
    productGrid: {
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: "8px",
    },
    media: {
      paddingTop: '56.25%',
      height: 140,
    },
    link: {
      textDecoration: "none",
      textDecorationLine: "none"
    },
    buy: {
      width: "100%"
    }
  });

  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={4} >
      {props.prodReducer.products
        .filter(product => props.match.params.id === product._id)
        .map(product => {
          return (
            <Grid item xs={8}>
              <Card className={classes.card}>
                  <Typography variant="h4">{product.name}</Typography>
                  <Typography variant="body1">{product.description}</Typography>
                  <CardMedia
                    className={classes.media}
                    image={product.url}
                    title={product.name} />
                  <CardContent>
                    <Typography>{product.inventory} left in stock</Typography>
                    <Typography>${product.price}</Typography>
                  </CardContent>
                <CardActions>
                  <Button className={classes.buy} color="primary" variant="contained" onClick={() => props.addToCart(product)}>Buy</Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })
      }
    </Grid>
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