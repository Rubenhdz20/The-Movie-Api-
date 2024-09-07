import React from 'react';
import { useNavigate } from 'react-router-dom';

function ArrowButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <svg onClick={handleClick} className='w-[1.7rem] h-[1.5rem] ml-5 mt-5 cursor-pointer md:mt-0' viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M26.625 11.5C26.625 12.1041 26.1353 12.5938 25.5312 12.5938H4.10879L12.0863 20.5699C12.5137 20.9973 12.5137 21.6902 12.0863 22.1176C11.659 22.545 10.966 22.545 10.5387 22.1176L0.694922 12.2738C0.489541 12.0687 0.37414 11.7903 0.37414 11.5C0.37414 11.2097 0.489541 10.9313 0.694922 10.7262L10.5387 0.882422C10.966 0.455049 11.659 0.455049 12.0863 0.882422C12.5137 1.3098 12.5137 2.0027 12.0863 2.43008L4.10879 10.4062H25.5312C26.1353 10.4062 26.625 10.8959 26.625 11.5Z" fill="white"/>
        </svg> 
    );
}

export default ArrowButton;