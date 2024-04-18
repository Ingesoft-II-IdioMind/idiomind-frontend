import { apiSlice2 } from "../services/apiSlice2";

const authApiSlice2 = apiSlice2.injectEndpoints({
	endpoints: builder => ({
		bringDocuments: builder.mutation({
			query: () => ({
				url: '/documents/',
				method: 'GET',
			}),
		}),
		uploadDocument: builder.mutation({
			query: ({titulo,autor,base64}) => ({
				url: '/documents/',
				method: 'POST',
				body: {titulo,autor,base64},
			}),
		}),
		bringOneDocument: builder.mutation({
			query: ({id}) => ({
				url: `/documents/${id}/`,
				method: 'GET',
			}),
		}),
		deleteDocument: builder.mutation({
			query: ({id}) => ({
				url: `/documents/${id}/`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useBringDocumentsMutation,
	useUploadDocumentMutation,
	useBringOneDocumentMutation,
	useDeleteDocumentMutation,
} = authApiSlice2;