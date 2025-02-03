import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "lzMjBpVAzSCYKSVkT-xtNeIEAb2SBaKq7kEV3p9Tu1I";

export const fetchImagesWithTopic = async (query, page) => {
  const response = await axios.get(
    `${API_URL}?client_id=${API_KEY}&query=${query}&page=${page}&per_page=12'`
  );
  return response.data.results;
};
