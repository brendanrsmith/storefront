import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Products from './components/Products';
import ActiveCategory from './components/ActiveCategory';
import { CssBaseline } from '@material-ui/core';
import '@fontsource/roboto';
import SimpleCart from './components/SimpleCart';

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
