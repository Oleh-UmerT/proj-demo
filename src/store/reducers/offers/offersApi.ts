import { Offers } from "@/types/offers";
import { onQueryStarted, rootApi, Tags } from "../../rtkQueryConfig";

export const offersApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getOffers: build.query<Offers[], void>({
      query: () => `/api/v1/offers`,
      providesTags: [Tags.Offer],
    }),


    getOffer: build.query<Offers, number | string>({
      query: (id) => `/api/v1/offers/${id}`,
      providesTags: [Tags.Offer],
    }),

    
  }),
  overrideExisting: false,
});

export const {
  // useFileUploadMutation,
  useGetOffersQuery,
  useGetOfferQuery,
  // useGetPropertySummaryQuery,
  // useGetRentCastMutation,
  // usePropertyRegisterMutation,
} = offersApi;