import axios from 'axios';
import { addToCart, removeFromCart } from './cart';

const api = 'https://brsmith-auth-api.herokuapp.com/api/v1/products';


let initialState = {
  products: [
    // {
    //   category: 'hats',
    //   name: 'Red hat',
    //   price: 50.99,
    //   description: 'its a hat that is red',
    //   inventory: 32,
    //   url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fJ1Yr6ZE4C3Y6IKPxC9bQQHaHa%26pid%3DApi&f=1'
    // },
  ],
}

const prodReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'GET_PRODS':
      return { products: payload };
    default:
      return state;
  }
}

export const getRemoteData = () => async dispatch => {
  let response = await axios.get(api);
  dispatch(getAction(response.data))
}

// TODO: this is gnarly, should get its logic cleaned up
export const putRemoteData = (product, incrementor) => async dispatch => {
  let inventory = (await axios.get(`${api}/${product._id}`)).data.inventory;

  const update = { ...product, inventory: incrementor ? inventory - 1 : inventory + 1 }

  let response = await axios.put(`${api}/${product._id}`, update)

  console.log('inventory: ', response.data.inventory);

  if (response.status) {
    incrementor ? dispatch(addToCart(response.data)) : dispatch(removeFromCart(product));
    dispatch(getRemoteData());
  }
}

export const getAction = (data) => {
  return {
    type: 'GET_PRODS',
    payload: data
  }
}

export default prodReducer;
