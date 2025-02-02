import { useState } from "react";
import "./App.css";
// import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchImagesWithTopic } from "./images-api";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [page, setPage] = useState(1);

  const handleSearch = async (topic, page) => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchImagesWithTopic(topic, page);
      setImages(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery items={images} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageModal />
      {/* <LoadMoreBtn setPage={setPage} /> */}
      <button onClick={() => setPage((prev) => prev + 1)}>Load more</button>
    </>
  );
}

export default App;
