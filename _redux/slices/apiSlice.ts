import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com"}),
    endpoints: (builder) => ({
        getPosts: builder.query<any, void>({
            query: () => `/posts`,
        }),
        getPost: builder.query<any, number>({
            query: (id) => `/posts?id=${id}`,
        }),
        getComments: builder.query<any, void>({
            query: () => `/comments`,
        }),
        getCommentsByPostId: builder.query<any, number>({
            query: (postId) => `/comments?postId=${postId}`,
        }),
        getUsers: builder.query<any, void>({
            query: () => `/users`,
        }),
        getUser: builder.query<any, number>({
            query: (userId) => `/users?id=${userId}`,
        }),
    })
});

export const {useGetPostsQuery, useGetPostQuery, useGetCommentsQuery, useGetCommentsByPostIdQuery, useGetUsersQuery, useGetUserQuery} = apiSlice;
