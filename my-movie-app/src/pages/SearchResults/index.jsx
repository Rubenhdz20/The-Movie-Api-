import React from 'react';
import { useSearch } from '../../hooks/useSearch';
import ArrowButton from '../../components/ArrowButton';

function SearchResults() {
    const { page, setPage, movies, loading } = useSearch();

    const loadMoreMovies = () => {
        setPage(page + 1);
    };

    return(
        <section className="flex flex-col justify-center bg-background text-white">
            <ArrowButton />

            {loading && page === 1 ? (
                <div>Loading...</div>  // Display a loading message while the first page is loading
            ) : (
                <div className="grid justify-items-center items-center grid-cols-2 mt-8 mb-8">
                    {movies.map((movie) => (
                        <img
                            key={movie.id}
                            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                            alt={movie.title}
                            className="w-[10rem] h-[14rem] mt-4 mb-4 rounded-xl"
                        />
                    ))}
                </div>
            )}

            {!loading && movies.length > 0 && (
                <button onClick={loadMoreMovies} className="p-2 bg-blue-500 rounded">
                    Load More
                </button>
            )}
         </section>
        
    )
}

export default SearchResults;

// This component will be responsible for rendering the search input and displaying the grid of movies that match the search query.
// ALSO THE SEARCH BAR COMPONENT WILL BE THERE IF YOU WANT TO SEARCH FOR A SPECIFIC MOVIE 
// WHEN CLICKING TO THE MOVIE COMPONENT IT WILL REDIRECT YOU TO THE MOVIE DETAILS COMPONENT 
    

// import React, { useState } from 'react';
// import MovieCard from './MovieCard';

// function SearchResults() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [movies, setMovies] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await fetch(`https://api.example.com/search?query=${searchQuery}`);
//       const data = await response.json();
//       setMovies(data.results);
//     } catch (error) {
//       console.error('Error fetching search results:', error);
//     }
//   };

//   return (
//     <div className="search-results">
//       <button className="back-button">←</button>
//       <div className="search-bar">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Search Movie"
//         />
//         <button onClick={handleSearch}>
//           <span role="img" aria-label="search">🔍</span>
//         </button>
//       </div>
//       <div className="movie-grid">
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SearchResults;
