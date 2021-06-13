import SimpleCart from './components/cart/SimpleCart';
import Categories from './components/storefront/Categories';
import Products from './components/storefront/Products';
import ActiveCategory from './components/storefront/ActiveCategory';

function Home() {
  return (
    <main>
      <Categories />
      <SimpleCart />
      <ActiveCategory />
      <Products />
    </main>
  )
}

export default Home;