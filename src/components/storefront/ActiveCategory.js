import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const ActiveCategory = props => {
  return (
    <section>
      <Typography gutterBottom variant="h4" align="center" component="h1">{props.catReducer.activeCategory ? props.catReducer.activeCategory.toUpperCase() : ''}</Typography>
    </section>
  )
}

const mapStateToProps = state => ({
  catReducer: state.catReducer
});

export default connect(mapStateToProps)(ActiveCategory);