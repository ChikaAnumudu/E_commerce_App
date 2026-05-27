import { PRODUCT_URL } from "../constants/Urls.js";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:({keyword,pageNumber})=>({
                url: PRODUCT_URL,
                params: {keyword,pageNumber}
            }),
            keepUnusedDataFor: 5,
            providesTags: ["product"],

        }),
        getProductDetails:builder.query({
            query:(productId)=>({
                url: `${PRODUCT_URL}/${productId}`
            }),
            keepUnusedDataFor: 5,
            providesTags: ["product"],
        }),
    }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery} = productApiSlice;