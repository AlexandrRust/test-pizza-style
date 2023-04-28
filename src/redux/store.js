import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { serializableCheck } from '../constats/serializableCheck';
import productsSlice from './products/products-slice';

const productsPersistConfig = {
  key: 'products',
  storage,
  blacklist: ['pizzaList'],
};

export const persistProducts = persistReducer(
  productsPersistConfig,
  productsSlice
);

export const store = configureStore({
  reducer: {
    products: persistProducts,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck,
      devTools: process.env.NODE_ENV === 'development',
    });
  },
});

export const persistor = persistStore(store);
