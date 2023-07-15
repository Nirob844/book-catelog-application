/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    singleBook: builder.query({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      query: (id) => `/book/${id}`,
    }),
    createBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: "POST",
        body: data,
      }),
    }),
    //   getComment: builder.query({
    //     query: (id) => `/comment/${id}`,
    //     providesTags: ['comments'],
    //   }),
  }),
});

export const { useGetBooksQuery, useSingleBookQuery, useCreateBookMutation } =
  bookApi;
