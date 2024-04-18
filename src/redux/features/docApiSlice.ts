import { apiSliceDoc } from "../services/apiSliceDoc";

const authApiSliceDoc = apiSliceDoc.injectEndpoints({
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
} = authApiSliceDoc;