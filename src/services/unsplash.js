import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos/";
const API_KEY = "pKIAwE9KyTsEnrob5fln_hxBalBluAFHdAGnBFGOt-k";

const fetchImages = async (topic, page) => {
  const { data } = await axios.get(
    `?client_id=${API_KEY}&query=${topic}&page=${page}&per_page=12`
  );

  return data;
};

export default fetchImages;