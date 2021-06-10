import axios from 'axios';
import { addToCart, removeFromCart } from './cart';

const api = 'https://brsmith-auth-api.herokuapp.com/api/v1/products';


let initialState = {
  products: [
    {
      category: 'hats',
      name: 'Red hat',
      price: 50.99,
      description: 'its a hat that is red',
      inventory: 32,
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fJ1Yr6ZE4C3Y6IKPxC9bQQHaHa%26pid%3DApi&f=1'
    },
    {
      category: 'socks',
      name: 'Brown socks',
      price: 5.99,
      description: 'its a sock that is brown',
      inventory: 34,
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Y9YZZeT-9h1Ma-2JhEAZfgHaHC%26pid%3DApi&f=1'
    },
    {
      category: 'socks',
      name: 'Green socks',
      price: 15.99,
      description: 'its socks that is green',
      inventory: 11,
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xegKpCts_0Ur2vmDEuoKGgHaLH%26pid%3DApi&f=1'
    },
    {
      category: 'hats',
      name: 'Blue hat',
      price: 59.99,
      description: 'its a hat that is blue',
      inventory: 24,
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.06KoufHB-2sFEDrIwURW6AHaHa%26pid%3DApi&f=1'
    },
    {
      category: 'sunglasses',
      name: 'Boomer sunglasses',
      price: 500.99,
      description: 'its aviator sunglasses',
      inventory: 3,
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q-3E_zcmUAN1IJXrQbFUpAHaHa%26pid%3DApi&f=1'
    },
    {
      category: 'sunglasses',
      name: 'Kid\'s sunglasses',
      price: 100.99,
      description: 'its dumb sunglasses',
      inventory: 1,
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.R37jZuwbBcQ7WotnCstNygHaHa%26pid%3DApi&f=1'
    },

  ],
}

const prodReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'GET_PRODS':
      return { products: payload };
    // case 'ADDTOCART':
    //   const addedInventory = state.products.map(product => {
    //     if (product === payload) {
    //       return { ...product, inventory: product.inventory - 1 }
    //     }
    //     return product;
    //   })
    //   return { products: addedInventory }

    // case 'REMOVEFROMCART':
    //   const removedInventory = state.products.map(product => {
    //     if (product.name === payload.name) {
    //       return { ...product, inventory: product.inventory + 1 }
    //     }
    //     return product;
    //   })
    //   return { products: removedInventory }
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
    console.log(response);
    incrementor ? dispatch(addToCart(response.data)) : dispatch(removeFromCart(product));
  }
}

export const getAction = (data) => {
  return {
    type: 'GET_PRODS',
    payload: data
  }
}

export default prodReducer;
