import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './services/apiSlice';
import authReducer from './features/authSlice';
import { apiSlice2 } from './services/apiSlice2';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		[apiSlice2.reducerPath]: apiSlice2.reducer,
		auth: authReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apiSlice.middleware, apiSlice2.middleware),
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<(typeof store)['getState']>;
export type AppDispatch = (typeof store)['dispatch'];