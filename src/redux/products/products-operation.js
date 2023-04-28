import { createAsyncThunk } from '@reduxjs/toolkit';
import { products } from '../../constats/products';

export const getPizzaList = createAsyncThunk(
  '/products',
  async (_, thunkAPI) => {
    try {
      return products;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addPizzaCard = createAsyncThunk(
  '/add',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedCart = state.products.cart;

    try {
      if (persistedCart.length === 0) {
        const cartList = [credentials];
        return cartList;
      }
      if (persistedCart.find(elem => elem.id === credentials.id)) {
        return persistedCart;
      } else {
        const cartList = [...persistedCart, credentials];
        return cartList;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const plusPizzaCard = createAsyncThunk(
  '/plus',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedCart = state.products.cart;
    try {
      if (
        persistedCart.find(elem => elem.id === credentials.id) &&
        persistedCart.length === 1
      ) {
        const cartList = [credentials];
        console.log(cartList);
        return cartList;
      } else {
        const data = [];
        persistedCart.map(
          elem => elem.id !== credentials.id && data.push(elem)
        );
        const cartList = [...data, credentials];
        return cartList;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const minusPizzaCard = createAsyncThunk(
  '/minus',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedCart = state.products.cart;
    try {
      if (credentials.quantity === 0) {
        const data = [];
        persistedCart.map(
          elem => elem.id !== credentials.id && data.push(elem)
        );
        const cartList = [...data];
        return cartList;
      }
      if (
        persistedCart.find(elem => elem.id === credentials.id) &&
        persistedCart.length === 1
      ) {
        const cartList = [credentials];
        return cartList;
      } else {
        const data = [];
        persistedCart.map(
          elem => elem.id !== credentials.id && data.push(elem)
        );
        const cartList = [...data, credentials];
        return cartList;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
export const clearPizzaCard = createAsyncThunk(
  '/clear',
  async (credentials, thunkAPI) => {
    try {
      return credentials;
    } catch (error) {
      console.log(error);
    }
  }
);
export const removePizzaCard = createAsyncThunk(
  '/remove',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedCart = state.products.cart;
    try {
      const data = [];
      persistedCart.map(elem => elem.id !== credentials.id && data.push(elem));
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
