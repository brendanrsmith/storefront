import { connect } from 'react-redux';

import { setActiveCategory, reset } from '../store/category.js';

const Categories = props => {
  return (
    <section>
      <ul>
        {props.catReducer.categories.map(cat => {
          return <li onClick={() => props.setActiveCategory(cat.name)} >{cat.displayName}</li>
        })}
        <li onClick={() => props.reset()}>reset active category</li>
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  catReducer: state.catReducer
});

const mapDispatchToProps = { setActiveCategory, reset }

export default connect(mapStateToProps, mapDispatchToProps)(Categories);