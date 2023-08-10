import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Iproduct } from "../interface";
const productsAPI = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"

    }),
    tagTypes: ["products"],
    endpoints: (builder) => ({
        getProducts: builder.query<Iproduct[], void>({
            query: () => "/products",
            providesTags: ["products"],
        }),
        getProduct: builder.query({
            query: (id: number) => `/products/${id}`,
            invalidatesTags: ["products"],
        }),


        addProduct: builder.mutation({
            query: (newProduct: Iproduct[]) => ({
                url: "/products",
                method: "POST",
                body: newProduct,
            }),
            invalidatesTags: ["products"],
        }),
        deleteProduct: builder.mutation({
            query: (id: number) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["products"],
        }),
        updateProduct: builder.mutation({
            query: (updateProduct: Iproduct) => ({
                url: `/products/${updateProduct.id}`,
                method: "PUT",
                body: updateProduct,
            }),
            invalidatesTags: ["products"],
        }),
    })
})
export const { useGetProductsQuery, useAddProductMutation, useDeleteProductMutation, useUpdateProductMutation, useGetProductQuery } = productsAPI
console.log("productsAPI", productsAPI);

export default productsAPI
