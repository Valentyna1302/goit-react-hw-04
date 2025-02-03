import { useEffect, useState } from "react";
import "./App.css";
// import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
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

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImagesWithTopic(query, page);
        setImages((prev) => [...prev, ...data]);
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
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery items={images} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageModal />
      <LoadMoreBtn setPage={setPage} />
    </>
  );
}

export default App;
