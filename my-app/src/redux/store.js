//creating global stroe--so that we could use in every pages and compponents 
// to use Action and reducer

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import { combineReducers } from "@reduxjs/toolkit";
// import {persistStore, persistReducer} from 'redux-persist'
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'

// login garda to know persit state
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
 
  const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };

  // reduces which we want to persit
const rootReducer = combineReducers({ 
    user: userReducer, 
    cart: cartReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const store = createStore({
//   reducer: persistedReducer,
//   reducer:{
//     cart:cartReducer,
//     user:persistedReducer
//   },
//   applyMiddleware(ReduxThunk)
// }) 

export let persistor = persistStore(store);
// export default configureStore({
//     reducer:
//     {
//         cart: cartReducer,
//         user: useRdeucer
//     },
// });

// carReducer--use this store --we should wrap our application with a provider 
// So ---index.js ma provide