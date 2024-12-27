export interface ImageData {
  id: string;
  urls: {
    small: string;
    full: string;
  };
  alt_description: string | undefined;
}

export interface SearchImagesResponse {
  results: ImageData[];
}
