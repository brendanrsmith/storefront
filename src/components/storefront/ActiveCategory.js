import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const ActiveCategory = props => {
  return (
    <section>
      <Typography gutterBottom variant="h2" align="center" component="h1">{props.catReducer.activeCategory}</Typography>
    </section>
  )
}

const mapStateToProps = state => ({
  catReducer: state.catReducer
});

export default connect(mapStateToProps)(ActiveCategory);