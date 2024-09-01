import React from 'react';
import { useNavigate } from 'react-router-dom';


function Category({name}) {
    const navigate = useNavigate();

    const handleCategoryClick = () => {
        navigate(`/movie-app/search/movies/${name}`);
    };

    return(
        <>
            <div onClick={handleCategoryClick} className="w-[7rem] h-[3rem] flex items-center justify-center bg-background-button rounded-lg cursor-pointer">
                <p>{name}</p>
            </div>
        </>
    )
}

export default Category;