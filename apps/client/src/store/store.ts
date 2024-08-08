import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { CarService } from '../api/services/CarService.ts';

const rootReducer = combineReducers({
  [CarService.reducerPath]: CarService.reducer,
});

export const configStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([CarService.middleware]),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configStore>;
export type AppDispatch = AppStore['dispatch'];
