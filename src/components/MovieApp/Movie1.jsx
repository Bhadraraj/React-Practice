import React, { useState, useEffect } from 'react';
import Table from './Table';
import axios from 'axios';

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/movies')
      .then(res => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const handleDelete = (movie) => {
    const updatedMovies = movies.filter(m => m._id !== movie._id);
    setMovies(updatedMovies);
  };

  const count = movies.length;

  if (count === 0) return <p>There is no movie in the database</p>;

  return (
    <>
      <Table clickME={handleDelete} movies={movies} />
      <div>
        <p>Showing {count} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Movie;
