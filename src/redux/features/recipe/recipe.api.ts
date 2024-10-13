import { baseApi } from "@/redux/api/baseApi";

const recipeManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRecipe: builder.query({
      query: () => ({
        url: "/allRecipes",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllRecipeQuery } = recipeManagementApi;
