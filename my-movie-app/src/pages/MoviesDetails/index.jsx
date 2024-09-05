import React, { useState, useEffect } from 'react';
import ArrowButton from '../../components/ArrowButton';
import { useParams } from 'react-router-dom';
import api from '../../utils/axiosPreset';

function MovieDetails() {
    const { id } = useParams();  // Get the movie ID from the URL
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const { data } = await api.get(`/movie/${id}`);
                setMovie(data);  // Set the movie data
                setLoading(false);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        fetchMovieDetails();
    }, [id]);  // Re-run when the movie ID changes

    if (loading) {
        return <div>Loading...</div>;
    }

    return(
        <section id="movieDetails" className="flex flex-col items-center justify-center bg-background text-white">
            <div className="flex space-x-28 p-10">
                <ArrowButton></ArrowButton>
                <h1 className="text-xl text-white">{movie.title}</h1>
            </div>
            
            <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title}
                className="mt-4 mb-4 rounded-xl"
            />

            {/* <img src={movie.image} alt={movie.name} className="" /> */}

            <div className="flex flex-col items-center justify-center p-10">
                <h2 className="mb-4 text-lg">Score: {movie.vote_average}</h2>
                <p>{movie.overview}</p>
            </div>

            <h2 className="ml-5 mt-16 text-xl">Category</h2>

            <article className="flex flex-row items-center justify-center p-10">
                {movie.genres.map((genre) => (
                    <div key={genre.id} className="w-[9rem] h-[3rem] flex items-center justify-center bg-background-button rounded-lg mr-4">
                        <h3 className="text-lg text-background">{genre.name}</h3>
                    </div>
                ))}
            </article>
        </section>
    )
}

export default MovieDetails

// THE IDEA OF THIS COMPONENT IS TO SHOW THE DETAIL INFORMATION OF EVERY MOVIE SELECTED