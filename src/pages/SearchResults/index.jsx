import React from 'react';
import { useSearch } from '../../hooks/useSearch';
import ArrowButton from '../../components/ArrowButton';
import MovieCard from '../../components/MovieCard';

function SearchResults() {
    const { page, setPage, movies, loading } = useSearch();

    const loadMoreMovies = () => {
        setPage(page + 1);
    };

    return(
        <section className="flex flex-col justify-center bg-background text-white">
            <ArrowButton />

            {loading && page === 1 ? (
                <div>Loading...</div> 
            ) : (
                <div className="grid justify-items-center items-center grid-cols-2 mt-8 mb-8">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            posterPath={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                            alt={movie.title}
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