import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Products from './components/Products';
import ActiveCategory from './components/ActiveCategory';

function App() {
  return (
    <div className="App">
      <Header />
      <ActiveCategory />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
