import { apiSliceFlash } from "../services/apiSliceFlash";

const authApiSliceFlash = apiSliceFlash.injectEndpoints({
	endpoints: builder => ({
		bringFlashcards: builder.mutation({
			query: () => ({
				url: '/flashcards/',
				method: 'GET',
			}),
		}),
		createFlashcard: builder.mutation({
			query: ({titulo,autor,base64}) => ({
				url: '/flashcards/',
				method: 'POST',
				body: {titulo,autor,base64},
			}),
		}),
		bringOneFlashcard: builder.mutation({
			query: ({id}) => ({
				url: `/flashcards/${id}/`,
				method: 'GET',
			}),
		}),
		deleteFlashcard: builder.mutation({
			query: ({id}) => ({
				url: `/flashcards/${id}/`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useBringFlashcardsMutation,
	useCreateFlashcardMutation,
	useBringOneFlashcardMutation,
	useDeleteFlashcardMutation,
} = authApiSliceFlash;