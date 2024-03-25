import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://jsonplaceholder.typicode.com",
});

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery,
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/posts",
    }),
    getCurrentTodo: builder.query({
      query: ({id}) => `/posts/${id}`,
    }),
  }),
});

export const {useGetTodosQuery, useGetCurrentTodoQuery} = todosApi;