import { configureStore } from '@reduxjs/toolkit';

import playerReducer from '../reducer/playerReducer';
import favoritesReducer from '../reducer/favoritesReducer';
import searchReducer from '../reducer/searchReducer';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    favorites: favoritesReducer,
    search: searchReducer,
  },
});

export default store;
