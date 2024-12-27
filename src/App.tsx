import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { searchImages } from "./services/api";
import { SearchImagesResponse, ImageData } from "./types";

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [modalData, setModalData] = useState({
    isOpen: false,
    imageSrc: "",
    imageAlt: "",
  });

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      setError(null);

      try {
        const data: SearchImagesResponse = await searchImages(query, page);
        if (data.results.length === 0) {
          if (page === 1) {
            setError("За вашим запитом нічого не знайдено.");
          }
        } else {
          setImages((prevImages) =>
            page === 1 ? data.results : [...prevImages, ...data.results]
          );
        }
      } catch {
        setError("Не вдалося завантажити зображення. Спробуйте ще раз.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    if (!newQuery.trim()) {
      toast.error("Будь ласка, введіть текст для пошуку.");
      return;
    }

    if (newQuery === query) return;

    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageSrc: string, imageAlt: string) => {
    setModalData({
      isOpen: true,
      imageSrc,
      imageAlt,
    });
  };

  const closeModal = () => {
    setModalData({
      isOpen: false,
      imageSrc: "",
      imageAlt: "",
    });
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <SearchBar onChangeQuery={handleSearch} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery images={images} onImageClick={openModal} />
          {loading && <Loader />}
          {images.length > 0 && !loading && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
        </>
      )}
      <ImageModal
        isOpen={modalData.isOpen}
        onClose={closeModal}
        imageSrc={modalData.imageSrc}
        imageAlt={modalData.imageAlt}
      />
    </div>
  );
};

export default App;
