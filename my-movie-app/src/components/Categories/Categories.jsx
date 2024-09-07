import { useCategories } from "../../hooks/useGetCategories";
import Category from "./Category";

function Categories() {
    const { dataMovies, loading } = useCategories('/genre/movie/list');

    console.log(dataMovies);

    return(
        <section id="categories" className="bg-background text-white">
            <h2 className="ml-5 mt-16 text-xl md:text-2xl">Categories</h2>
            <article className="h-full w-full grid grid-cols-3 items-center justify-items-center gap-4 p-9 md:grid-cols-4">
                {dataMovies.map((item) => (
                    <div key={item.id} className="w-full flex items-center justify-center bg-background-button rounded-lg cursor-pointer">
                        <Category  
                            title={item.name}
                            id={item.id}
                        />
                    </div>
                ))}
            </article>
        </section>
    )
}


export default Categories;

// Which components are the ones that when clicking to them you will be redirected to the search results 
// SearchBar when clicking the magnifier svg
// Category Component which is a button when you click to it 
// The button that says SeeAll, it might be a component 

// Which component will need to be redirected to the MovieDetails when you click it 
// Movie Card of the Carousel 
// Within searchResults each Movie Card
// Arrow button is the one that redirects you to the home page 

// I have to rethink the routes of the project 