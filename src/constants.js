// @flow

export const APP_STORE_KEY = 'app';
export const MOVIES_STORE_KEY = 'movies';
export const MOVIES_REC_STORE_KEY = 'recommendations';
export const ERRORS_STORE_KEY = 'errors';
export const API_BASE_URL = 'http://localhost:3000';
export const PAGE_TITLE = 'React Movie Cards';

export const LayoutType = {
  MOBILE: 'Mobile',
  TABLET: 'Tablet',
  DESKTOP: 'Desktop',
};

export const actionType = {
  INITIAL_STATE: 'INITIAL_STATE',
  INITIAL_STATE_ERROR: 'INITIAL_STATE_ERROR',
};

export const ERRORS = {
  INITIAL_STATE_ERROR: 'Ошибка загрузки фильмов с рекоммендациями. Обратитесь к администратору.',
};
