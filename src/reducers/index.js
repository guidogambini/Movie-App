import Swal from 'sweetalert2';

const initialState = {
  moviesFavorites: [],
  moviesLoaded: [],
  movieDetail: {}
}


function rootReducer(state = initialState, action) {
  switch (action.type) {

    case "ADD_MOVIE_FAVORITE":
      Swal.fire({
        title: 'Film added to favs!',
        icon: 'success',
        confirmButtonText: 'Go!'
      })
      return {
        ...state,
        moviesFavorites: [...state.moviesFavorites, action.payload]
      };

    case "GET_MOVIES":
      if (action.payload.hasOwnProperty('Error')) {
        Swal.fire({
          title: 'Error!',
          text: 'Film not found',
          icon: 'error',
          confirmButtonText: 'Go!'
        })
      }
      else if (state.moviesLoaded.length>=4) {
        Swal.fire({
          title: 'Error!',
          text: 'Maximum four films on the screen',
          icon: 'error',
          confirmButtonText: 'Go!'
        })
      }
      else {
        return {
          ...state,
          moviesLoaded: [...state.moviesLoaded, action.payload]
        };
      }
      

    case "REMOVE_MOVIE_FAVORITE":
      return {
        ...state,
        moviesFavorites: state.moviesFavorites.filter(movie => movie.id !== action.payload)
      };
      

    case "GET_MOVIE_DETAIL":
      return {
        ...state,
        movieDetail: action.payload
      };

    default: return state;
  }
}


export default rootReducer;