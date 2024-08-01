import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICar } from '../../shared/models/ICar.ts';

type CarParams = {
  limit: number;
  offset: number;
  page: number;
};

export const CarService = createApi({
  reducerPath: 'CarService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
  }),
  tagTypes: ['Car'],
  endpoints: (builder) => ({
    fetchAllCars: builder.query<ICar[], CarParams>({
      query: () => ({
        url: `/cars`,
      }),
      providesTags: () => ['Car'],
    }),
    fetchCarById: builder.query<ICar[], ICar>({
      query: (id) => ({
        url: `/cars/${id}`,
      }),
      providesTags: () => ['Car'],
    }),
  }),
});

export const { useFetchAllCarsQuery, useFetchCarByIdQuery } = CarService;
