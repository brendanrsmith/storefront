import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import { getAllProds, getActiveProds } from '../store/product';

const Products = props => {

  const useStyles = makeStyles({
    root: {
      maxWidth: "90vw",
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
      {props.prodReducer.products.map(product => {
        return (
          <Grid item xs={12} sm={6} md={3} >
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
                <Button color="primary">Add to cart</Button>
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
  catReducer: state.catReducer
});

const mapDispatchToProps = { getAllProds, getActiveProds };

export default connect(mapStateToProps, mapDispatchToProps)(Products);