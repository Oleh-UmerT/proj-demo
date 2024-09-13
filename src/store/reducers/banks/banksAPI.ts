import { BanksType, BankType } from "@/types/banks";
import { onQueryStarted, rootApi, Tags } from "../../rtkQueryConfig";

export const banksApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getBanks: build.query<BanksType[], void>({
      query: () => `/api/v1/banks`,
      providesTags: [Tags.Bank],
    }),

    getCountries: build.query<BanksType[], void>({
      query: () => `/api/v1/country`,
      providesTags: [Tags.Bank],
    }),

    getBank: build.query<BankType, number | string>({
      query: (id) => `/api/v1/banks/${id}`,
      providesTags: [Tags.Bank],
    }),

    
  }),
  overrideExisting: false,
});

export const {
  // useFileUploadMutation,
  useGetBanksQuery,
  useGetCountriesQuery,
  useGetBankQuery,
  // useGetPropertySummaryQuery,
  // useGetRentCastMutation,
  // usePropertyRegisterMutation,
} = banksApi;