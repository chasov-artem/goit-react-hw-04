import { useEffect, useState } from "react";
import "./App.css";
import { fetchImages } from "./components/Services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages(page, query);
        setImages((prevImages) =>
          page === 1 ? data : [...prevImages, ...data]
        );
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      getData();
    }
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar setQuery={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {isError && <h2>Something went wrong!</h2>}
      {images.length > 0 && <LoadMoreBtn handleChangePage={handleChangePage} />}
      {isOpen && (
        <ImageModal
          isOpen={isOpen}
          onRequestClose={closeModal}
          selectedImage={selectedImage}
        />
      )}
    </>
  );
};

export default App;
