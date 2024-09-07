import React from 'react';
import { useNavigate } from 'react-router-dom';


function Category({title, id}) {
    const navigate = useNavigate();

    const handleCategoryClick = () => {
        navigate(`/category/${id}`);  
    };

    return(
        <>
            <div onClick={handleCategoryClick} className="h-[3rem] flex items-center justify-center bg-background-button text-background rounded-lg cursor-pointer">
                <p className='md:text-xl'>{title}</p>
            </div>
        </>
    )
}

export default Category;