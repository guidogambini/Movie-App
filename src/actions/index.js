import axios from 'axios';

export function addMovieFavorite(payload) {
  return {
    type: "ADD_MOVIE_FAVORITE", payload
  };
}

export function getMovieDetail(id) {
  return async function (dispatch) {
    try {
      const movie = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=e0f0a1eb`);
      return dispatch({
        type: "GET_MOVIE_DETAIL",
        payload: movie.data
      })
    } catch (error) {
      console.log(error);
    }

  }
};

export function removeMovieFavorite(id) {
  return { type: "REMOVE_MOVIE_FAVORITE", payload: id };
}

export function getMovies(title) {
  return async function (dispatch) {
    try {
      const movie = await axios.get(`https://www.omdbapi.com/?t=${title}&apikey=e0f0a1eb`);
      console.log(movie.data)
      return dispatch({
        type: 'GET_MOVIES',
        payload: movie.data
      })
    } catch (error) {
      console.log(error);
    }
  }
}