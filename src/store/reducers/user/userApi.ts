import { onQueryStarted, rootApi, Tags } from "../../rtkQueryConfig";
import { User } from "@/types/user";

const USERS_URL_PATH = "users";
const USER_AUTH_URL_PATH = "auth";
const USER_URL_PATH = "user";
const USER_PROFILE_PATh = "userprofile";
//userprofile/update",'PUT'
interface ContactUsBody {
  full_name: string;
  email: string;
  message: string;
}

export const userApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getCurrentUser: build.query<User, void>({
      query: () => `/api/v1/users/me`,
      providesTags: [Tags.User],
    }),

    getVerStat: build.query<User, void>({
      query: () => `/api/v1/users/v`,
      providesTags: [Tags.User],
    }),

    getMyOffers: build.query<any, void>({
      query: () => `/api/v1/users/me/offers`,
      providesTags: [Tags.User],
    }),

    getBalance: build.query<User, void>({
      query: () => `/api/v1/users/balance`,
      providesTags: [Tags.User],
    }),

    fileUpload: build.mutation({
      query: (body) => ({
        url: `/api/v1/documents/upload?type=id_front&kyc=passport`,
        method: "POST",
        body,
      }),
      invalidatesTags: [Tags.User],
      onQueryStarted,
    }),

    offerApply: build.mutation<void, { amount: number; oid: string }>({
      query: (body) => ({
        url: `/api/v1/users/apply`,
        method: "POST",
        body,
      }),
      invalidatesTags: [Tags.User],
      onQueryStarted,
    }),

    contactUs: build.mutation<void, ContactUsBody>({
      query: (body) => ({
        url: `${USER_URL_PATH}/contact`,
        method: "POST",
        body,
      }),
      invalidatesTags: [Tags.User],
      onQueryStarted,
    }),

    setNewPassword: build.mutation<
      void,
      { new_password: string; token: string }
    >({
      query: (body) => ({
        url: `${USER_AUTH_URL_PATH}/reset-password`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [Tags.User],
      onQueryStarted,
    }),

    updateUserProfile: build.mutation<void, FormData>({
      query: (body) => ({
        url: `${USER_PROFILE_PATh}/update`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [Tags.User],
      onQueryStarted,
    }),
  }),
  overrideExisting: false,
});

export const {
  useOfferApplyMutation,
  useGetBalanceQuery,
  useGetMyOffersQuery,
  useGetVerStatQuery,
  useFileUploadMutation,
  useSetNewPasswordMutation,
  useContactUsMutation,
  useGetCurrentUserQuery,
  useUpdateUserProfileMutation,
} = userApi;
