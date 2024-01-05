import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MovieTrailerContainer from './MovieTrailerContainer';
import MoviesListContainer from './MoviesListContainer';

const Browse = () => {
  useNowPlayingMovies();
   return (
    <div>
      <Header/>
    <MovieTrailerContainer/>
    <MoviesListContainer/>
    </div>
  )
}

export default Browse