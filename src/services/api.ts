import axios from "axios";
import { SearchImagesResponse, ImageData } from "../types"; // Імпортуємо типи з types.ts

export const searchImages = async (
  query: string,
  page: number
): Promise<SearchImagesResponse> => {
  const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;
  const BASE_URL = "https://api.unsplash.com/search/photos";

  const { data } = await axios.get<SearchImagesResponse>(BASE_URL, {
    params: {
      query,
      page,
      client_id: API_KEY,
    },
  });

  return data;
};
