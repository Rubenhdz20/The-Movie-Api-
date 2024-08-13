
import React from 'react';
// import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      {/* <Link to={`/movie/${movie.id}`}>
        <img src={movie.image} alt={movie.title} className="movie-thumbnail" />
      </Link> */}
    </div>
  );
}

export default MovieCard;

// THE IDEA OF THIS COMPONENT IS TO SHOW THE IMG OF THE MOVIE
// WHEN CLICKING IT CAN REDIRECT YOU TO THE MOVIE DETAILS COMPONENT 