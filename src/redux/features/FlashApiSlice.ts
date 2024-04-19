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
			query: ({mazo,frente,reverso}) => ({
				url: '/users/',
				method: 'POST',
				body: {mazo,frente,reverso},
			}),
		}),
		editFlashcard: builder.mutation({
			query: ({mazo,frente,reverso}) => ({
				url: '/users/',
				method: 'POST',
				body: {mazo,frente,reverso},
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
				url: `/deck/${id}/`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useBringFlashcardsMutation,
	useCreateFlashcardMutation,
	useEditFlashcardMutation,
	useBringOneFlashcardMutation,
	useDeleteFlashcardMutation,
} = authApiSliceFlash;