import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface Image {
  id: string;
  urls: {
    small: string;
    full: string;
  };
  alt_description?: string;
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (imageSrc: string, imageAlt: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li key={image.id} className={s.galleryItem}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
