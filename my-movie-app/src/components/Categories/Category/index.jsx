import React from 'react';
import { useNavigate } from 'react-router-dom';


function Category({title, id}) {
    const navigate = useNavigate();

    const handleCategoryClick = () => {
        navigate(`/category/${id}`);  // This navigates to the correct route
    };

    return(
        <>
            <div onClick={handleCategoryClick} className="w-[7rem] h-[3rem] flex items-center justify-center bg-background-button rounded-lg cursor-pointer">
                <p>{title}</p>
            </div>
        </>
    )
}

export default Category;