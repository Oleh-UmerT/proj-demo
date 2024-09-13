import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { getSession } from "next-auth/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: async (headers) => {
    const session = await getSession();

    if (session) {
      //@ts-ignore
      headers.set("Authorization", `Bearer ${session?.user?.token}`);
    }
    return headers;
  },
});