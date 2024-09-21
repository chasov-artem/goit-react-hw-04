import axios from "axios";

export const fetchImages = async (page = 1, query = "", perPage = 6) => {
  const { data } = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: "o0An1ivigFe085X0c1vk1yk-7bEYxSTLCOuGYVqyDZA",
      query: query,
      page: page,
      per_page: perPage,
    },
  });
  return { images: data.results, totalPages: data.total_pages };
};
