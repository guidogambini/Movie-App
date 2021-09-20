import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovieDetail, addMovieFavorite } from '../../actions/index';
import './Movie.css';
import { IoStarSharp } from "react-icons/io5";
import NavBar from '../NavBar/NavBar';



export default function Movie() {


    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieDetail(id));
        
    }, [dispatch]);

    /* dispatch(getMovieDetail(id)); */

    const favMovie = useSelector(state => state.movieDetail);


    return (
        <>
        <NavBar />
        <div className="detail">
        <button className='addFav' onClick={() => dispatch(addMovieFavorite({ title: favMovie.Title, id: favMovie.imdbID, poster: favMovie.Poster, year: favMovie.Year }))}><IoStarSharp /></button>
            <img src={favMovie.Poster} alt={"img"} height='527' />
            <ul className='lista'>
                <li className='titulo'>{favMovie.Title}</li>
                <li>Year: {favMovie.Year}</li>
                <li>Duration: {favMovie.Runtime}utes</li>
                <li>Genre: {favMovie.Genre}</li>
                <li>Director: {favMovie.Director}</li>
                <li>Writers: {favMovie.Writer}</li>
                <li>Cast: {favMovie.Actors}</li>
                <li>IMDB Rating: {favMovie.imdbRating}</li>
            </ul>
            <p className='plot'>
                {favMovie.Plot !== 'N/A'? favMovie.Plot: null}
            </p>
        </div>
        </>
    )
};


