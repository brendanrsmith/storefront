import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import catReducer from './category';
import prodReducer from './product';

let reducers = combineReducers({ catReducer, prodReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();