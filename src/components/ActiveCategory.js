import { connect } from 'react-redux';

const ActiveCategory = props => {
  return (
    <section>
      <h1>Active Category: {props.catReducer.activeCategory}</h1>
    </section>
  )
}

const mapStateToProps = state => ({
  catReducer: state.catReducer
});

export default connect(mapStateToProps)(ActiveCategory);