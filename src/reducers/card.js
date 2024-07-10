import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  modal: false,
  active: 0,
  cards: JSON.parse(localStorage.getItem("cards")) ||[],
  warning: false,
  totalPrice: 0,
  isAuth: false,
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,

  reducers: {
    handleLiked: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        state.items[itemIndex].isLiked = !state.items[itemIndex].isLiked;
      }
    },

    handleActive: (state, action) => {
      state.active = action.payload;
    },

    openModal: (state) => {
      state.modal = true;
    },

    closeModal: (state) => {
      state.modal = false;
    },

    setItems: (state, action) => {
      state.items = action.payload;
    },

    clearWarning: (state) => {
      state.warning = false;
    },

    handleRemove: (state, action) => {
      state.cards = state.cards.filter((item) => item.id !== action.payload);
      localStorage.setItem("cards", JSON.stringify(state.cards));
    },

    setCards: (state, action) => {
      const item = action.payload;
      const itemIndex = state.cards.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex === -1) {
        state.cards = [...state.cards, { ...item, amount: 1 }];
      } else {
        state.warning = true;
      }
      localStorage.setItem("cards", JSON.stringify(state.cards));
    },

    increment: (state, action) => {
      const item = state.cards.find((card) => card.id === action.payload);
      if (item) {
        item.amount += 1;
      }
      localStorage.setItem("cards", JSON.stringify(state.cards));
    },
    decrement: (state, action) => {
      const item = state.cards.find((card) => card.id === action.payload);
      if (item && item.amount > 1) {
        item.amount -= 1;
      }
      localStorage.setItem("cards", JSON.stringify(state.cards));
    },

    handlePrice: (state) => {
      state.totalPrice = state.cards.reduce(
        (subtotal, item) => subtotal + item.amount * item.price,
        0
      );
      localStorage.setItem("cards", JSON.stringify(state.cards));
    },

    handleReset: (state) => {
      state.cards = [];
      localStorage.setItem("cards", JSON.stringify(state.cards));
    },
  },
});

export const {
  handleActive,
  openModal,
  closeModal,
  setItems,
  setCards,
  setWishlist,
  clearWarning,
  handleRemove,
  handlePrice,
  increment,
  decrement,
  finishAuth,
  startAuth,
  handleReset,
} = cardSlice.actions;

export default cardSlice.reducer;
