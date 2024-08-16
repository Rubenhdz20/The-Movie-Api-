import { Link } from 'react-router-dom';

function Section({ title, items }) {
    return(
        <section id="trendingPreview" className="flex flex-col items-center justify-center p-9 bg-background text-white">
            <div className="flex space-x-28 p-8">
                <h2 className="text-xl">{title}</h2>
                <Link to={`/search-results`}>
                    <button className="">See all</button>
                </Link>
            </div>
            <article className="">
                <div className="">
                   <Link to={`/movie/1`}>
                        <img
                            src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                            className="rounded-xl"
                            alt="Movie Name"
                        />
                   </Link>
                </div>
                {/* <div className="carousel">
                    {items.map((item, index) => (
                        <div key={index} className="carousel-item">
                            <img src={item.image} alt={item.title} />
                        </div>
                    ))}
                </div> */}
            </article>
        </section>
    )
}

export default Section;

// The fetched data is passed down to the Section and Categories components as props. These components will render the data based on what's received.