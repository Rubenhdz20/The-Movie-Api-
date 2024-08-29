import React from 'react';

function MovieCard({ title, posterPath, onClick }) {
    return (
        <div onClick={onClick} className="flex justify-center cursor-pointer p-4 hover:shadow-lg transition-shadow">
            <img 
                src={posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : 'path_to_default_image.jpg'} 
                alt={title} 
                className="w-[25rem] h-auto object-cover rounded-lg"
            />
        </div>
    );
}

export default MovieCard;

// THE IDEA OF THIS COMPONENT IS TO SHOW THE IMG OF THE MOVIE
// WHEN CLICKING IT CAN REDIRECT YOU TO THE MOVIE DETAILS COMPONENT 