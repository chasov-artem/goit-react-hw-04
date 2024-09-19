import { useEffect, useState } from "react";
import "./App.css";
import { fetchImages } from "./components/Services/api";

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
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <a
              href={image.links?.html}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image.urls?.small}
                alt={image.alt_description || "No description available"}
              />
            </a>
            <p>{image.alt_description || "No description available"}</p>
            <p>Likes: {image.likes}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;

//  axios.get("https://api.unsplash.com/photos/?client_id=o0An1ivigFe085X0c1vk1yk-7bEYxSTLCOuGYVqyDZA&query=nature");
