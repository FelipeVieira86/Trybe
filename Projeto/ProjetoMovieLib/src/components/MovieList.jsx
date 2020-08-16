import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return this.props.movies.map((movie) => (
      <div className="movie-list">
        <MovieCard key={movie.title} movie={movie} />
      </div>
    ));
  }
}

export default MovieList;
