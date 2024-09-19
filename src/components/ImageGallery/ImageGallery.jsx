const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <div>
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ImageGallery;
