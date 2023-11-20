import React, { useState, useEffect } from 'react';
import Pagination from '../common/Pagination';

const MovieDemo = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(3);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:3000/movies'); // Replace with your API endpoint
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);
  const handleDelete = (movie) => {
    const updatedMovies = movies.filter((m) => m._id !== movie._id);
    setMovies(updatedMovies);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // const handleGenreSelect = (genre) => {
  //   setSelectedGenre(genre);
  //   setCurrentPage(1);
  // };

  const { length: count } = movies;

  if (count === 0) return <p>There are no movies in the database</p>;

  // const filtered =
  //   selectedGenre && selectedGenre._id
  //     ? movies.filter((m) => m.genre._id === selectedGenre._id)
  //     : movies;

  // const paginatedMovies = paginate(filtered, currentPage, pageSize);

  return (
    <>
      <div className="row">
        <div className="col-3">
          {/* <ListGroup
            items={genres}
            onItemSelect={handleGenreSelect}
            selectedItem={selectedGenre}
            textProperty="name"
            valueProperty="_id"
          /> */}
        </div>
        <div className="col">
          {/* <p>Showing {filtered.length} movies in the database</p> */}
          <p>Showing {movies.length} movies in the database</p>
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
              {/*  {paginatedMovies.map((movie) => ( */}
              {movies.map((movie) => (
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
          <Pagination
            itemsCount={movies.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default MovieDemo;
