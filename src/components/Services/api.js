import axios from "axios";

export const fetchImages = async () => {
  const { data } = await axios.get(
    "https://api.unsplash.com/photos/?client_id=o0An1ivigFe085X0c1vk1yk-7bEYxSTLCOuGYVqyDZA&query=nature"
  );
  return data;
};
