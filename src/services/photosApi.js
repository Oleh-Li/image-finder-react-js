import axios from "axios";

export const fetchPhotosWithQuery = (value = "dog", numPage = 1) => {
  const key = "15354044-5c6c2e030b5f90cfcf13d54e3";
  return axios
    .get(
      `https://pixabay.com/api/?q=${value}&page=${numPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=5`
    )
    .then((response) => response.data.hits);
};
