import { Button, ButtonGroup, Grid, makeStyles, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { setActiveCategory, reset, getRemoteData } from '../../store/category';

const Categories = props => {

  const fetchCategories = (e) => {
    e && e.preventDefault();
    props.get();
  }

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line
  }, []);

  const useStyles = makeStyles({
    category: {
      margin: "24px"
    }
  });

  const classes = useStyles();

  return (
    <Grid item xs className={classes.category}>
      <Typography gutterBottom variant="h5">Browse Categories:</Typography>
      <ButtonGroup gutterBottom color="primary" variant="text">
        <Button onClick={() => props.reset()}>all</Button>
        {props.catReducer.categories.map(cat => {
          return <Button onClick={() => props.setActiveCategory(cat.name)} key={cat.name}>{cat.displayName}</Button>
        })}
      </ButtonGroup>
    </Grid >
  )
}

const mapStateToProps = state => ({
  catReducer: state.catReducer
});

const mapDispatchToProps = (dispatch) => ({
  setActiveCategory: (cat) => dispatch(setActiveCategory(cat)),
  reset: () => dispatch(reset()),
  get: () => dispatch(getRemoteData())
}) // updated syntax from demo TODO: idk how this is working... 

export default connect(mapStateToProps, mapDispatchToProps)(Categories);