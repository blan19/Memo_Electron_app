import { api_base_url } from "@/constant/constant";
import { IStrapiEvent, IStrapiRes } from "@/types/events.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${api_base_url}/api/` }),
  endpoints: (builder) => ({
    getEventsById: builder.query<IStrapiRes, string>({
      query: (id) => `events?filters[user][id][$eq]=${id}`,
    }),
    addEvent: builder.mutation<IStrapiRes, IStrapiEvent>({
      query: (body) => ({
        url: "events",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetEventsByIdQuery } = eventsApi;
