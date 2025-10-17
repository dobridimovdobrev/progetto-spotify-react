import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likedSongs: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const songId = action.payload.id;
      const songIndex = state.likedSongs.findIndex(song => song.id === songId);
      
      if (songIndex >= 0) {  
        state.likedSongs.splice(songIndex, 1);
      } else { 
        state.likedSongs.push(action.payload);
      }
    },
  },
});

export const { toggleLike } = favoritesSlice.actions;
export default favoritesSlice.reducer;
