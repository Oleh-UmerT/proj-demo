import { combineReducers } from "@reduxjs/toolkit";
import { notifierReducer } from "./notifier";
import { userApi } from "./user/userApi";
import { offersApi } from "./offers/offersApi";
import { banksApi } from "./banks/banksAPI";

const apiReducers = {
  [userApi.reducerPath]: userApi.reducer,
  offersApi: offersApi.reducer,
  banksApi: banksApi.reducer,
};

const reducers = {
  notifier: notifierReducer,
};

export const rootReducer = combineReducers({ ...apiReducers, ...reducers });
