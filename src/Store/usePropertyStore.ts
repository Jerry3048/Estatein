import { create } from "zustand";
import axios from "axios";
import type { Property, PropertyStore } from "../types";

export const usePropertyStore = create<PropertyStore>((set) => ({
  properties: [],
  loading: false,
  error: null,

  ITEMS_PER_PAGE: 3,
  page: 0,

  fetchProperties: async () => {
    set({ loading: true });

    try {
      const res = await axios.get<Property[]>("/data/Properties.json");
      set({ properties: res.data, loading: false });
    } catch (err) {
      console.error(err);
      set({ error: "Failed to load property data", loading: false });
    }
  },

  nextPage: () =>
    set((state) => {
      const maxPage =
        Math.ceil(state.properties.length / state.ITEMS_PER_PAGE) - 1;

      return { page: Math.min(state.page + 1, maxPage) };
    }),

  prevPage: () =>
    set((state) => {
      return { page: Math.max(state.page - 1, 0) };
    }),

  setPage: (page: number) => set({ page })
}));
