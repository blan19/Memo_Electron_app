import { api_base_url } from "@/constant/constant";
import { IStrapiRes } from "@/types/events.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${api_base_url}/api/` }),
  endpoints: (builder) => ({
    getEventsById: builder.query<IStrapiRes, string>({
      query: (id) => `events?filters[user][id][$eq]=${id}`,
    }),
    getEventsByDay: builder.query<IStrapiRes, string>({
      query: (start) => `events?filters[start][$eq]=${start}`,
    }),
  }),
});

export const { useGetEventsByIdQuery, useGetEventsByDayQuery } = eventsApi;
