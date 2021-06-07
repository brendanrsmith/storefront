import { connect } from 'react-redux';

import { setActiveCategory } from '../store/category.js';

const Categories = props => {
  return (
    <section>
      <h1>Categories</h1>
      <ul>
        {props.catReducer.categories.map(cat => {
          return <li onClick={() => props.setActiveCategory(cat.name)} >{cat.displayName}</li>
        })}
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  catReducer: state.catReducer
});

const mapDispatchToProps = { setActiveCategory }

export default connect(mapStateToProps, mapDispatchToProps)(Categories);