import { baseApi } from "../../api/baseApi";
import { TagTypes } from "../../tag-types";
import { userLoggedIn } from "./authSlice";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: `/register`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [TagTypes.USERS],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `/login`,
        method: "POST",
        body: data,
      }),

      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("token", data.token);
          dispatch(
            userLoggedIn({
              token: data.token,
            })
          );
        } catch (err) {
          console.log(err);
        }
      },

      invalidatesTags: [TagTypes.USERS],
    }),
    getSingleUser: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: [TagTypes.USERS],
    }),

    getUsersData: builder.query({
      query: (arg: Record<string, unknown>) => ({
        url: `/users`,
        method: "GET",
        params: arg,
      }),
      providesTags: [TagTypes.USERS],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginMutation,
  useGetSingleUserQuery,
  useGetUsersDataQuery,
} = authApi;
