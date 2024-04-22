import { apiSliceDoc } from "../services/apiSliceDoc";

const authApiSliceDoc = apiSliceDoc.injectEndpoints({
	endpoints: builder => ({
		bringDocuments: builder.mutation({
			query: () => ({
				url: '/',
				method: 'GET',
			}),
		}),
		uploadDocument: builder.mutation({
			query: ({form_data}) => ({
				url: '/',
				method: 'POST',
				body: form_data,
				// headers: {
				// 	"Content-Type": "multipart/form-data",
				// },
			}),
		}),
		bringOneDocument: builder.mutation({
			query: ({id}) => ({
				url: `/${id}/`,
				method: 'GET',
			}),
		}),
		deleteDocument: builder.mutation({
			query: ({id}) => ({
				url: `/${id}/`,
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
} = authApiSliceDoc;