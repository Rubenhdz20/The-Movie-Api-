import React from 'react';
import { useNavigate } from 'react-router-dom';

function SeeAllButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/trending/movie/day`);
    };

    return (
        <button onClick={handleClick} className="p-2 bg-blue-500 rounded">
            See All
        </button>
    );
}

export default SeeAllButton;