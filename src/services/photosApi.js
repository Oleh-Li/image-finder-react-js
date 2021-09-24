import axios from "axios";

const fetchPhotosWithQuery = (value, numPage) => {
  const key = "15354044-5c6c2e030b5f90cfcf13d54e3";
  return axios
    .get(
      `https://pixabay.com/api/?q=${value}&page=${numPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default fetchPhotosWithQuery;
