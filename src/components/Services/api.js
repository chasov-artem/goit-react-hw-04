import axios from "axios";

export const fetchImages = async (page = 1, query = "") => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=o0An1ivigFe085X0c1vk1yk-7bEYxSTLCOuGYVqyDZA&query=${query}&page=${page}`
  );
  return data.results;
};
