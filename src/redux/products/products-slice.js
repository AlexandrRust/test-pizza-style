import { createSlice } from '@reduxjs/toolkit';
import { productsOperations } from '.';

const initialState = {
  pizzaList: [],
  cart: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [productsOperations.getPizzaList.fulfilled](state, action) {
      state.pizzaList = action.payload;
    },
    [productsOperations.addPizzaCard.fulfilled](state, action) {
      state.cart = action.payload;
    },
    [productsOperations.plusPizzaCard.fulfilled](state, action) {
      state.cart = action.payload;
    },
    [productsOperations.minusPizzaCard.fulfilled](state, action) {
      state.cart = action.payload;
    },
    [productsOperations.clearPizzaCard.fulfilled](state, action) {
      state.cart = action.payload;
    },
    [productsOperations.removePizzaCard.fulfilled](state, action) {
      state.cart = action.payload;
    },
  },
});

export default productsSlice.reducer;
