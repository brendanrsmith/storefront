import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import catReducer from './category';
import prodReducer from './product';
import cartReducer from './cart';

let reducers = combineReducers({ catReducer, prodReducer, cartReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();