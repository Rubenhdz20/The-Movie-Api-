import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { MovieCard } from '../MovieCard/index';
import { useGetData } from '../../hooks/useGetData';

function Carousel({ title }) {
    const navigate = useNavigate();

    const { dataMovies, loading } = useGetData('/trending/movie/day');

    const handleClick = () => {
        navigate(`/movie-app/${title.replace(/ /g, "")}${id ? `/${id}` : ""}`);
    };

    console.log(dataMovies);

    return(
        <section id="trendingPreview" className="flex flex-col items-center justify-center p-9 bg-background text-white">
            <div className="flex space-x-28 p-8">
                <h2 className="text-xl">{title}</h2>
                <button className="">See all</button>
            </div>
            <div className="flex overflow-hidden">
                <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory w-full">
                    {dataMovies.map((item) => (
                        <div key={item.id} className="snap-start w-full flex-shrink-0">
                            <img 
                                src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'path_to_default_image.jpg'}  
                                alt={item.original_title}
                                className="w-full h-auto object-cover rounded-lg md:w-1/2"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Carousel;

// The fetched data is passed down to the Section and Categories components as props. These components will render the data based on what's received.