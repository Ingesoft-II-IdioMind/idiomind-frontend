import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './services/apiSlice';
import authReducer from './features/authSlice';
import { apiSliceDoc } from './services/apiSliceDoc';
import { apiSliceDeck } from './services/apiSliceDeck';
import { apiSliceFlash } from './services/apiSliceFlash';
import { apiSliceTranslate } from './services/apiSliceTranslate';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		[apiSliceDoc.reducerPath]: apiSliceDoc.reducer,
		[apiSliceDeck.reducerPath]: apiSliceDeck.reducer,
		[apiSliceFlash.reducerPath]: apiSliceFlash.reducer,
		[apiSliceTranslate.reducerPath]: apiSliceTranslate.reducer,
		auth: authReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apiSlice.middleware, apiSliceDoc.middleware, apiSliceDeck.middleware, apiSliceFlash.middleware, apiSliceTranslate.middleware),
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<(typeof store)['getState']>;
export type AppDispatch = (typeof store)['dispatch'];