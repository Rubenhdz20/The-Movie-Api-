import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovieCard({ title, posterPath, id }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/movie/${id}`); 
    };

    return (
        <div onClick={handleClick} className="flex justify-center cursor-pointer p-4 hover:shadow-lg transition-shadow">
            <img 
                src={posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : 'path_to_default_image.jpg'} 
                alt={title} 
                className="w-[20rem] object-cover rounded-lg cursor-pointer md:w-[25rem]"
            />
        </div>
    );
}

export default MovieCard;

