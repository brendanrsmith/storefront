import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import catReducer from './category';
import prodReducer from './product';
import cartReducer from './cart';
import thunk from 'redux-thunk';

let reducers = combineReducers({ catReducer, prodReducer, cartReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();