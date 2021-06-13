import { CssBaseline } from '@material-ui/core';
import '@fontsource/roboto';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './Home';
import ShoppingCart from './components/cart/ShoppingCart';
import ProductDetails from './components/products/ProductDetails';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cart' component={ShoppingCart} />
        <Route path='/products/:id' component={ProductDetails} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
