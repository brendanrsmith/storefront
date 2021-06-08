import { Card, CardContent, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

// import { setActiveCategory, reset } from '../store/category.js';

const Products = props => {

  return (
    <section>
      <ul>
        {props.prodReducer.products.filter(product => product.category === props.catReducer.activeCategory).map(product => {
          return (
            <Card >
              <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="body2">{product.description}</Typography>
                <Typography variant="body1">${product.price}</Typography>
              </CardContent>
              
            </Card>
          )
        })}
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  prodReducer: state.prodReducer,
  catReducer: state.catReducer
});

export default connect(mapStateToProps)(Products);