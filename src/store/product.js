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
    case 'GETALLPRODUCTS':
      return { products: initialState.products };

    // case 'SETCATEGORY':
    //   let activeProducts = state.products.filter(product => product.category === payload);
    //   return { activeProducts: activeProducts };

    case 'ADDTOCART':
      const addedInventory = state.products.map(product => {
        if (product === payload) {
          return { ...product, inventory: product.inventory - 1 }
        }
        return product;
      })
      return { products: addedInventory }

    case 'REMOVEFROMCART':
      const removedInventory = state.products.map(product => {
        if (product.name === payload.name) {
          return { ...product, inventory: product.inventory + 1 }
        }
        return product;
      })
      return { products: removedInventory }


    default:
      return state;
  }
}

export const getAllProds = () => {
  return {
    type: 'GETALLPRODUCTS'
  }
}

export const setActiveProds = (category) => {
  return {
    type: 'SETCATEGORY',
    payload: category
  }
}

export default prodReducer;