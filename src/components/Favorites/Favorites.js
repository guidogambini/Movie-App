import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from '../../actions/index.js';
import { IoHomeSharp } from "react-icons/io5";
import NavBar from "../NavBar/NavBar";


export default function ConnectedList() {


  // Me traigo las favorite movies de mi estado global:
  const favMovies = useSelector(state => state.moviesFavorites);

  // En este componente voy a despachar un action creator: removeMovieFavorite.
  const dispatch = useDispatch();


  return (

    <div>
      <NavBar />
      <h2>Favorites</h2>
      <div className='favs'>
        {
          favMovies && favMovies.map(movie => (
            <section className='fav' key={movie.id} >
              <button onClick={() => dispatch(removeMovieFavorite(movie.id))} className='button'>X</button>
              <Link to={`/movie/${movie.id}`}>
              <img src={movie.poster} alt='movie poster' height='300' width='220'/>
              </Link>
              <span className='nombre'>
                {movie.title} {(movie.year)}
              </span>
            </section>
          ))
        }
      </div>
    </div>

  )
}