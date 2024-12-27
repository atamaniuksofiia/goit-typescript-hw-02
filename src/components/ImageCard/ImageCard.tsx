import React from "react";
import { ImageData } from "../../types";

interface ImageCardProps {
  image: ImageData;
  onImageClick: (imageSrc: string, imageAlt: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  const { urls, alt_description } = image;

  return (
    <div>
      <img
        src={urls.small}
        alt={alt_description || "Image"}
        onClick={() => onImageClick(urls.full, alt_description || "Image")} // Обробник події натискання
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default ImageCard;
