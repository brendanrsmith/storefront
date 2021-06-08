import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const Products = props => {

  return (
    <section>
      <Grid container >
        {props.prodReducer.products.filter(product => product.category === props.catReducer.activeCategory).map(product => {
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

export default connect(mapStateToProps)(Products);