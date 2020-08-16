import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';


class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: '',
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((response) => this.setState({ movies: response, loading: false }));
  }

  render() {
    const { movies, loading } = this.state;

    return loading ? (
      <Loading />
    ) : (
      <div>
        <div data-testid="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
