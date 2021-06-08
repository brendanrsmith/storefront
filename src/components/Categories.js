import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import { setActiveCategory, reset } from '../store/category.js';

const Categories = props => {
  return (
    <section>
      <Typography variant="h5">Browse Categories:</Typography>
      <ButtonGroup color="primary">
        {props.catReducer.categories.map(cat => {
          return <Button onClick={() => props.setActiveCategory(cat.name)} >{cat.displayName}</Button>
        })}
        <Button onClick={() => props.reset()}>reset active category</Button>
      </ButtonGroup>
    </section>
  )
}

const mapStateToProps = state => ({
  catReducer: state.catReducer
});

const mapDispatchToProps = { setActiveCategory, reset }

export default connect(mapStateToProps, mapDispatchToProps)(Categories);