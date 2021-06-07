import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import catReducer from './category';

let reducers = combineReducers({ catReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();