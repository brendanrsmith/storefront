import { CssBaseline } from '@material-ui/core';
import '@fontsource/roboto';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
