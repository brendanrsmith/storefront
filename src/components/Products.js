import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import { getAllProds, getActiveProds } from '../store/product';

const Products = props => {

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();

  return (
    <section>
      <Grid container >
        {props.prodReducer.products.map(product => {
          return (
            <Grid item >
              <Card variant="outlined" className={classes.root}>
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
                  <Button color="primary">Shop</Button>
                </CardActions>

              </Card>
            </Grid>
          )
        })}
      </Grid>
    </section>
  )
}

const mapStateToProps = state => ({
  prodReducer: state.prodReducer,
  catReducer: state.catReducer
});

const mapDispatchToProps = { getAllProds, getActiveProds };

export default connect(mapStateToProps, mapDispatchToProps)(Products);