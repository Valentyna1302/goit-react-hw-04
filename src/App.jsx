import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchImagesWithTopic } from "./images-api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({});

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImagesWithTopic(query, page);
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (query === newQuery) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setTotalPages(0);
  };

  const handleOpenModal = (image) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setCurrentImage({});
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} onClick={handleOpenModal} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}

      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn setPage={setPage} />
      )}

      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onCloseModal={handleCloseModal}
          currentImage={currentImage}
        />
      )}
    </>
  );
}

export default App;
