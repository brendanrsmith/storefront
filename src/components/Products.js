import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { getAllProds, getActiveProds } from '../store/product';

const Products = props => {

  // useEffect(() => {
  //   getActiveProds(props.catReducer.activeCategory)
  // }, [props.catReducer.activeCategory])

  return (
    <section>
      <Grid container >
      {/* {props.prodReducer.products.filter(product => product.category === props.catReducer.activeCategory).map(product => { */}
      {props.prodReducer.products.map(product => {
        return (
            <Grid item >
              <Card variant="outlined">

                <CardContent>
                  <Typography variant="h5">{product.name}</Typography>
                  <Typography variant="body2">{product.description}</Typography>
                  <Typography variant="body1">${product.price}</Typography>
                </CardContent>

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