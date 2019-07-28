// @flow
const initialStateApp = {
  movies: [],
  recommendations: [],
};

export const appReducer = (state = initialStateApp, action) => {
  switch (action.type) {
    case 'STORE_DATA':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
