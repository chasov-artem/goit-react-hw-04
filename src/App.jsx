import { useEffect, useState } from "react";
import "./App.css";
import { fetchImages } from "./components/Services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages();
        setImages(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <>
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {isError && <h2>Something went wrong!</h2>}
    </>
  );
};

export default App;
