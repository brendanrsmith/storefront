import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import { setActiveCategory, reset } from '../store/category.js';

const Categories = props => {
  return (
    <section>
      <Typography gutterBottom variant="h5">Browse Categories:</Typography>
      <ButtonGroup gutterBottom color="primary" variant="text">
        <Button onClick={() => props.reset()}>all</Button>
        {props.catReducer.categories.map(cat => {
          return <Button onClick={() => props.setActiveCategory(cat.name)} >{cat.displayName}</Button>
        })}
      </ButtonGroup>
    </section>
  )
}

const mapStateToProps = state => ({
  catReducer: state.catReducer
});

const mapDispatchToProps = { setActiveCategory, reset }

export default connect(mapStateToProps, mapDispatchToProps)(Categories);