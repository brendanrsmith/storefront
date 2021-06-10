import axios from 'axios';

const api = 'https://brsmith-auth-api.herokuapp.com/api/v1/categories';

let initialState = {
  categories: [
    // {
    // name: "sunglasses"
    // description: " sunglasses are worn on your nose."
    // displayName: "Sunglasses!"
    // }
  ],
  activeCategory: null,
}

const catReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'SETCATEGORY':
      let activeCategory = payload;
      let categories = state.categories;
      return { activeCategory, categories };

    case 'GET_CATS':
      return { categories: payload, activeCategory: initialState.activeCategory };

    case 'RESET':
      return { ...state, activeCategory: initialState.activeCategory };

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

export const getRemoteData = () => async dispatch => {
  let response = await axios.get(api);
  dispatch(getAction(response.data))
}

export const getAction = (data) => {
  return {
    type: 'GET_CATS',
    payload: data
  }
}
export default catReducer;