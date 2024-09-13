import { baseQuery } from "@/config/baseQuery";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypes } from "./tagTypes";
export const rootApi = createApi({
  reducerPath: "rootApi",
  baseQuery,
  tagTypes,
  endpoints: () => ({}),
});

export const rootApiMiddleware = rootApi.middleware;