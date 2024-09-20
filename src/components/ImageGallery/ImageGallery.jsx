import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, openModal }) => {
  const handleImageClick = (event, image) => {
    event.preventDefault();
    openModal(image);
  };

  return (
    <div>
      <ul>
        {images.map((image) => (
          <li
            key={image.id}
            className="image-item"
            onClick={(event) => handleImageClick(event, image)}
          >
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
