import React from 'react';
import ArrowButton from '../../components/ArrowButton';

function SearchResults() {
    return(
        <section className="flex flex-col justify-center bg-background text-white">
            {/* Componente SearchBar */}
            <ArrowButton></ArrowButton> 
            
            <div className="grid justify-items-center items-center grid-cols-2 mt-8 mb-8">
                <img
                    src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                    alt="Movie Name"
                    className="w-[10rem] h-[14rem] mt-4 mb-4 rounded-xl"
                />
                <img
                    src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                    alt="Movie Name"
                    className="w-[10rem] h-[14rem] mt-4 mb-4 rounded-xl"
                />
                <img
                    src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                    alt="Movie Name"
                    className="w-[10rem] h-[14rem] mt-4 mb-4 rounded-xl"
                />
            </div>

            <div className="">
                Hola
                {/* {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))} */}
            </div>
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
