import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import { useDispatch } from 'react-redux';
import { getCountries } from '../../actions';
import Cinema from './cinema.mp4';


const LandingPage = () => {

    /* const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]
    ); */

    return (

        <div className='contenedor'>
            <video autoPlay loop muted className='video' >
                <source src={Cinema} type="video/mp4" />
            </video>
            <Link to='/home'><button className='boton'>HOME</button></Link>
        </div>

    )
};




export default LandingPage;