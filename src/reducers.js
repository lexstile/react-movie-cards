// @flow
const initialStateApp = {
  movies: [],
};

export const appReducer = (state = initialStateApp, action) => {
  switch (action.type) {
    case 'INITIAL_STATE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
