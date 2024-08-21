

function SearchResults() {
    return(
        <section className="flex flex-col justify-center bg-background text-white">
            {/* Componente SearchBar */}
            <svg  className="w-7 h-6 mt-8 ml-8" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.625 11.5C26.625 12.1041 26.1353 12.5938 25.5312 12.5938H4.10879L12.0863 20.5699C12.5137 20.9973 12.5137 21.6902 12.0863 22.1176C11.659 22.545 10.966 22.545 10.5387 22.1176L0.694922 12.2738C0.489541 12.0687 0.37414 11.7903 0.37414 11.5C0.37414 11.2097 0.489541 10.9313 0.694922 10.7262L10.5387 0.882422C10.966 0.455049 11.659 0.455049 12.0863 0.882422C12.5137 1.3098 12.5137 2.0027 12.0863 2.43008L4.10879 10.4062H25.5312C26.1353 10.4062 26.625 10.8959 26.625 11.5Z" fill="white"/>
            </svg>  
            
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
