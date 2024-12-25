export interface ImageData {
  id: string;
  urls: {
    small: string;
    full: string;
  };
  alt_description: string | undefined; // Використовуємо undefined, щоб уникнути конфліктів з null
}

export interface SearchImagesResponse {
  results: ImageData[];
}
