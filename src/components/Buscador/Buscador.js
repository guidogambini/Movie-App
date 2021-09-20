import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { getMovies } from '../../actions/index.js';
import NavBar from "../NavBar/NavBar";
import { IoSearch } from "react-icons/io5";


export default function Buscador() {

  // Me traigo las movies cargadas de mi estado global:
  const movies = useSelector(state => state.moviesLoaded);
  
  // En este componente voy a despachar dos action creators: getMovies y addMovieFavorite.
  const dispatch = useDispatch();


  const [title, setTitle] = useState('');


  function handleOnChange(e) {

    setTitle(e.target.value);

  };

  function handleOnSubmit(e) {

    e.preventDefault();

    setTitle('');

    dispatch(getMovies(title));

  };




  return (
    <div className='contenedorHome'>
      <NavBar />
      <div className='searcher'>
        <input
          type="text"
          placeholder='Select a film...'
          autoComplete='off'
          value={title}
          onChange={handleOnChange}
          /* onKeyDown={handleOnKeyDown} */
          className='input'
        />
        <button type='submit' onClick={handleOnSubmit} className='submit' ><IoSearch /></button>
      </div>
      <div className='pelis'>
        {
          movies && movies.map(movie => (
            <div className= 'containerBuscador'>
                <Link to={`/movie/${movie.imdbID}`}  className='linkBuscador'>
                  <h2 className='nameBuscador'>{movie.Title}</h2>
                  <img src={movie.Poster} alt="not found" className='posterBuscador' />
                </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

