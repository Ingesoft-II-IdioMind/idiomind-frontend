import { apiSlicePost } from "../services/apiSlicePost";

const authApiSlicePost = apiSlicePost.injectEndpoints({
	endpoints: builder => ({
		bringPosts: builder.mutation({
			query: () => ({
				url: '/',
				method: 'GET',
			}),
		}),
	}),
});

export const {
	useBringPostsMutation,
} = authApiSlicePost;