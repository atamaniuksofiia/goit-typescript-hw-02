import axios from "axios";
import { SearchImagesResponse } from "../types";

export const searchImages = async (
  query: string,
  page: number
): Promise<SearchImagesResponse> => {
  const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
  const BASE_URL = "https://api.unsplash.com/search/photos";

  if (!API_KEY) {
    throw new Error("API ключ не знайдено! Перевірте файл .env");
  }

  const { data } = await axios.get<SearchImagesResponse>(BASE_URL, {
    params: {
      query,
      page,
      client_id: API_KEY,
    },
  });

  return data;
};
