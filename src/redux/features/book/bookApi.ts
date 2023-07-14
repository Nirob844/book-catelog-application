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
    //   qpostComment: builder.mutation({
    //     uery: ({ id, data }) => ({
    //       url: `/comment/${id}`,
    //       method: 'POST',
    //       body: data,
    //     }),
    //     invalidatesTags: ['comments'],
    //   }),
    //   getComment: builder.query({
    //     query: (id) => `/comment/${id}`,
    //     providesTags: ['comments'],
    //   }),
  }),
});

export const { useGetBooksQuery, useSingleBookQuery } = bookApi;
