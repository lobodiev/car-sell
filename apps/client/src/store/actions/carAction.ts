import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ICar } from '../../shared/models/ICar.ts';

export const fetchCars = createAsyncThunk('cars/fetchCars', async (_, api) => {
  try {
    const response = await axios.get<ICar>('cars.json');
    console.log(response);
    return response.data;
  } catch (error) {
    return api.rejectWithValue(`Can't load list of cars`);
  }
});
