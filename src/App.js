import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Categories from './components/storefront/Categories';
import Products from './components/storefront/Products';
import ActiveCategory from './components/storefront/ActiveCategory';
import { CssBaseline } from '@material-ui/core';
import '@fontsource/roboto';
import SimpleCart from './components/cart/SimpleCart';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Categories />
      <SimpleCart />
      <ActiveCategory />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
