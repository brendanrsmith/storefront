import { connect } from 'react-redux';

// import { setActiveCategory, reset } from '../store/category.js';

const Products = props => {

  return (
    <section>
      <h2>products</h2>
      <ul>
        {props.prodReducer.products.filter(cat => cat.category === props.catReducer.activeCategory).map(cat => {
          return <li >{cat.name}</li>
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