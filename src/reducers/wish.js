import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
  compare: JSON.parse(localStorage.getItem('compare')) || [],
};

export const wishSlice = createSlice({
  name: 'wish',
  initialState,

  reducers: {
    setWishlist: (state, action) => {
      const item = action.payload;
      const itemIndex = state.wishlist.findIndex((cartItem) => cartItem.id === item.id);

      if (itemIndex === -1) {
        state.wishlist = [...state.wishlist, item];
      } else {
        state.wishlist = state.wishlist.filter((dislike) => dislike.id !== item.id);
      }
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },

    addCompare: (state, action) => {
      const item = action.payload;
      const itemIndex = state.compare.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex === -1) {
        state.compare = [...state.compare, item];
      } else {
        state.compare = state.compare.filter((added) => added.id !== item.id);
      }
      localStorage.setItem('compare', JSON.stringify(state.compare));
    },
  },
});

export const { setWishlist, addCompare } = wishSlice.actions;

export default wishSlice.reducer;
