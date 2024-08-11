
function Section({ title, items }) {
    return(
        <section id="trendingPreview" className="">
            <div className="">
                <h2 className="">{title}</h2>
                <button className="">See all</button>
            </div>
            <article className="">
                <div className="">
                    <img
                    src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                    className=""
                    alt="Movie Name"
                    />
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