let initialState = {
  categories: [
    {
      name: 'hats',
      displayName: 'Hats!',
      description: 'things you put on your head'
    },
    {
      name: 'socks',
      displayName: 'Socks!',
      description: 'things you put on your feet'
    },
    {
      name: 'sunglasses',
      displayName: 'Sunglasses!',
      description: 'things you put on your nose'
    },
  ],
  activeCategory: null,
}

const catReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'SETCATEGORY':
      let activeCategory = payload;
      // let categories = initialState.categories;
      return activeCategory;

    default:
      return state;
  }
}

export const setActiveCategory = (category) => {
  return {
    type: 'SETCATEGORY',
    payload: category
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}

export default catReducer;