let initialState = {
  products: [
    {
      category: 'hats',
      name: 'red hat',
      price: 50.99,
      description: 'its a hat that is red',
      inventory: 32
    },
    {
      category: 'socks',
      name: 'brown socks',
      price: 5.99,
      description: 'its a sock that is brown',
      inventory: 34
    },
    {
      category: 'socks',
      name: 'green socks',
      price: 15.99,
      description: 'its socks that is green',
      inventory: 11
    },
    {
      category: 'hats',
      name: 'blue hat',
      price: 59.99,
      description: 'its a hat that is blue',
      inventory: 24
    },
    {
      category: 'sunglasses',
      name: 'aviators',
      price: 500.99,
      description: 'its aviator sunglasses',
      inventory: 3
    },
    {
      category: 'sunglasses',
      name: 'pit vipers',
      price: 100.99,
      description: 'its dumb sunglasses',
      inventory: 2
    },

  ],
}

const prodReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GETALLPRODUCTS':
      let products = initialState.products;
      return { products: products };

    case 'SETCATEGORY':
      let activeProducts = initialState.products.filter(product => product.category === payload);
      return { products: activeProducts };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export const getAllProds = () => {
  return {
    type: 'GETALLPRODUCTS'
  }
}

export const getActiveProds = (category) => {
  return {
    type: 'SETCATEGORY',
    payload: category
  }
}

export default prodReducer;