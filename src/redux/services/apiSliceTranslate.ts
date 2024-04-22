import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { setAuth, logout } from '../features/authSlice';
import { Mutex } from 'async-mutex';

const mutex = new Mutex();
const baseQueryTranslate = fetchBaseQuery({
	baseUrl: `${process.env.NEXT_PUBLIC_HOST}/document/api/translate/`, //Revisar
	credentials: 'include',
});
const baseQueryWithReauthTranslate: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	await mutex.waitForUnlock();
	let result = await baseQueryTranslate(args, api, extraOptions);

	if (result.error && result.error.status === 401) {
		if (!mutex.isLocked()) {
			const release = await mutex.acquire();
			try {
				const refreshResult = await baseQueryTranslate(
					{
						url: '/jwt/refresh/',
						method: 'POST',
					},
					api,
					extraOptions
				);
				if (refreshResult.data) {
					api.dispatch(setAuth());

					result = await baseQueryTranslate(args, api, extraOptions);
				} else {
					api.dispatch(logout());
				}
			} finally {
				release();
			}
		} else {
			await mutex.waitForUnlock();
			result = await baseQueryTranslate(args, api, extraOptions);
		}
	}
	return result;
};

export const apiSliceTranslate = createApi({
	reducerPath: '/document/api/translate/', //Revisar
	baseQuery: baseQueryWithReauthTranslate,
	endpoints: builder => ({}),
});