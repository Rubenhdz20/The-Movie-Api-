import { useNavigate } from "react-router-dom";
import { useGetData } from '../../hooks/useGetData';
import  MovieCard  from '../MovieCard/index';
import SeeAllButton from "../SeeAllButton";

function Carousel({ title }) {
    const navigate = useNavigate();

    const { dataMovies, loading } = useGetData('/trending/movie/day');

    const scrollLeft = () => {
        const carousel = document.getElementById('carousel');
        carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
    };

    const scrollRight = () => {
        const carousel = document.getElementById('carousel');
        carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
    };

    const handleClick = () => {
        navigate(`/movie-app/${title.replace(/ /g, "")}${id ? `/${id}` : ""}`);
    };

    console.log(dataMovies);

    return (
        <section id="trendingPreview" className="relative flex flex-col items-center justify-center p-9 bg-background text-white">
            <div className="flex space-x-28 p-8">
                <h2 className="text-xl">{title}</h2>
                <SeeAllButton></SeeAllButton>
            </div>
            <button 
                onClick={scrollLeft} 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                &#9664; {/* Left arrow symbol */}
            </button>
            <button 
                onClick={scrollRight} 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                &#9654; {/* Right arrow symbol */}
            </button>
            <div className="flex flex-col items-center overflow-hidden">
                <div id="carousel" className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory w-full scrollbar-none">
                    {dataMovies.map((item) => (
                        <div key={item.id} className="snap-start w-full flex-shrink-0 md:w-1/2">
                            <MovieCard  
                                posterPath={item.poster_path}
                                id={item.id}
                                className="w-full h-auto object-cover rounded-lg cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Carousel;

// The fetched data is passed down to the Section and Categories components as props. These components will render the data based on what's received.