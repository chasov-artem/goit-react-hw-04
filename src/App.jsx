import { useEffect, useState } from "react";
import "./App.css";
import { fetchImages } from "./components/Services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";

const App = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchImages();
      console.log(data);
      setImages(data);
    };
    getData();
  }, []);
  return (
    <>
      <ImageGallery images={images} />
    </>
  );
};

export default App;

//  axios.get("https://api.unsplash.com/photos/?client_id=o0An1ivigFe085X0c1vk1yk-7bEYxSTLCOuGYVqyDZA&query=nature");
