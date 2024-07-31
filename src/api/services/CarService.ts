import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

import { ICar } from '../../shared/models/ICar.ts';

// export const CarService = createApi({
//   reducerPath: 'CarService',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5173' }),
//   tagTypes: ['Car'],
//   endpoints: (build) => ({
//     fetchAllCars: build.query<ICar[], number>({
//       query: (limit: number = 10) => ({
//         url: `/cars`,
//         params: {
//           _limit: limit,
//         },
//       }),
//       providesTags: (result) => ['Car'],
//     }),
//     fetchCar: build.query<ICar, ICar>({
//       query: (car) => ({
//         url: `/cars/${car.id}`,
//       }),
//       providesTags: (result) => ['Car'],
//     }),
//   }),
// });

export const CarService = createApi({
  reducerPath: 'CarService',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5173' }),
  tagTypes: ['Car'],
  endpoints: (build) => ({
    fetchAllCars: build.query<ICar[], number>({
      query: (limit: number = 10) => ({
        url: `/cars`,
        params: {
          _limit: limit,
        },
      }),
      providesTags: () => ['Car'],
    }),
  }),
});
