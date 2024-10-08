import React, { useState, useEffect } from 'react';
import ArrowButton from '../../components/ArrowButton';
import { useParams } from 'react-router-dom';
import api from '../../utils/axiosPreset';

function MovieDetails() {
    const { id } = useParams();  
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const { data } = await api.get(`/movie/${id}`);
                setMovie(data);  
                setLoading(false);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        fetchMovieDetails();
    }, [id]); 

    if (loading) {
        return <div className='bg-background text-white'>Loading...</div>;
    }

    return(
        <section id="movieDetails" className="flex flex-col items-center justify-center bg-background text-white">
            <div className="flex items-center justify-center space-x-28 p-10">
                <ArrowButton></ArrowButton>
                <h1 className="text-xl text-white md:text-2xl">{movie.title}</h1>
            </div>
            
            <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title}
                className="mt-4 mb-4 rounded-xl"
            />

            <div className="flex flex-col items-center justify-center p-10">
                <h2 className="mb-4 text-lg">Score: {movie.vote_average}</h2>
                <p className='max-w-[75rem]'>{movie.overview}</p>
            </div>

            <h2 className="ml-5 mt-16 text-xl">Category</h2>

            <article className="grid grid-cols-3 items-center justify-between gap-4 p-10 md:flex">
                {movie.genres.map((genre) => (
                    <div key={genre.id} className="w-[7rem] h-[3rem] flex items-center justify-center bg-background-button rounded-lg mr-4 md:w-[9rem]">
                        <h3 className="text-background md:text-xl">{genre.name}</h3>
                    </div>
                ))}
            </article>
        </section>
    )
}

export default MovieDetails