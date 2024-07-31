import { PayloadAction } from '@reduxjs/toolkit';

import { ICar } from '../../shared/models/ICar.ts';
import { fetchCars } from '../actions/carAction';

interface CarState {
  cars: ICar[];
  isLoading: boolean;
  error: string;
}

const initialState: CarState = { cars: [], error: '', isLoading: false };

export const CarSlice = () => ({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCars.fulfilled.type]: (
      state: CarState,
      action: PayloadAction<ICar[]>,
    ) => {
      state.isLoading = false;
      state.error = '';
      state.cars = action.payload;
    },
    [fetchCars.pending.type]: (state: CarState) => {
      state.isLoading = true;
    },
    [fetchCars.rejected.type]: (
      state: CarState,
      action: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
