import { useGetData } from '../../hooks/useGetData';
import  MovieCard  from '../MovieCard/index';
import SeeAllButton from "../SeeAllButton";

function Carousel({ title }) {
    const { dataMovies } = useGetData('/trending/movie/day');

    const scrollLeft = () => {
        const carousel = document.getElementById('carousel');
        carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
    };

    const scrollRight = () => {
        const carousel = document.getElementById('carousel');
        carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
    };

    console.log(dataMovies);

    return (
        <section id="trendingPreview" className="relative flex flex-col items-center justify-center p-9 bg-background text-white">
            <div className="flex items-center justify-center space-x-28 p-8">
                <h2 className="text-xl">{title}</h2>
                <SeeAllButton></SeeAllButton>
            </div>
            <button 
                onClick={scrollLeft} 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                &#9664; 
            </button>
            <button 
                onClick={scrollRight} 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                &#9654; 
            </button>
            <div className="flex flex-col items-center overflow-hidden">
                <div id="carousel" className="flex scroll-smooth snap-x snap-mandatory w-full scrollbar-none">
                    {dataMovies.map((item) => (
                        <div key={item.id} className="snap-start w-full flex-shrink-0">
                            <MovieCard  
                                posterPath={item.poster_path}
                                id={item.id}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Carousel;