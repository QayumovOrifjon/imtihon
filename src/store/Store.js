import { configureStore } from '@reduxjs/toolkit';
import  cardSlice from '../reducers/card';
import  wishSlice  from '../reducers/wish';


const store = configureStore({
  reducer: {
 card:cardSlice,
 wish: wishSlice,
  },
});

export default store;
