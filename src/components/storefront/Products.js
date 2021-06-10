import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import { getRemoteData, putRemoteData } from '../../store/product';

const Products = props => {

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
  });

  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={4} >
      {props.prodReducer.products
        .filter(product => props.catReducer.activeCategory ? product.category === props.catReducer.activeCategory : true)
        .filter(product => product.inventory > 0)
        .map(product => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.name}>
              <Card variant="outlined" className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={product.url}
                    title={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6">{product.name}</Typography>
                    <Typography color="textSecondary" variant="body2">{product.description}</Typography>
                    <Typography variant="body1">${product.price}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button color="primary" onClick={() => props.addToCart(product)}>Add to cart</Button>
                  <Button color="primary">Details</Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);