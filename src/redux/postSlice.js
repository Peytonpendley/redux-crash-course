import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'//creatApi is like counterSlice 

export const postApi = createApi({
    reducerPath: "postApi",//this is the name of your api to identify it

    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com/"}),
    //the baseUrl doesn't have the /comments or  /posts as you see at the top of the page url

    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => "posts"
        }),
        getPostById: builder.query({
            query: (id) => `posts/${id}`,
        })
        //getAllPosts litterally gets every id and prints it onto the screen, getPostById prints the api onto the screen via id number
    })
    //builder is used to build to api url
})

export const {useGetAllPostsQuery, useGetPostByIdQuery} = postApi