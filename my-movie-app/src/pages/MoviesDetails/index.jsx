
function MovieDetails({ movie }) {
    return(
        <section id="movieDetails" className="flex flex-col items-center justify-center bg-background text-white">
            <div className="flex space-x-28 p-10">
                <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.625 11.5C26.625 12.1041 26.1353 12.5938 25.5312 12.5938H4.10879L12.0863 20.5699C12.5137 20.9973 12.5137 21.6902 12.0863 22.1176C11.659 22.545 10.966 22.545 10.5387 22.1176L0.694922 12.2738C0.489541 12.0687 0.37414 11.7903 0.37414 11.5C0.37414 11.2097 0.489541 10.9313 0.694922 10.7262L10.5387 0.882422C10.966 0.455049 11.659 0.455049 12.0863 0.882422C12.5137 1.3098 12.5137 2.0027 12.0863 2.43008L4.10879 10.4062H25.5312C26.1353 10.4062 26.625 10.8959 26.625 11.5Z" fill="white"/>
                </svg>  
                {/* debe llevar una funcion que regrese el svg a la pagina principal  */}

                <h1 className="text-xl text-white">Movie Name</h1>
                {/* <h1 className="text-xl text-white">movie.props</h1> */}
            </div>
            
            <img
                src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                alt="Movie Name"
                className="mt-4 mb-4 rounded-xl"
            />

            {/* <img src={movie.image} alt={movie.name} className="" /> */}

            <div className="flex flex-col items-center justify-center p-10">
                <h2 className="mb-4 text-lg">Score</h2>
                <p className="">Es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor </p>
                {/* el score y el contenido tambien vendra de props  */}
            </div>

            <h2 className="ml-5 mt-16 text-xl">Category</h2>

            <article className="flex flex-row items-center justify-center p-10">
                <div className="w-[9rem] h-[3rem] flex items-center justify-center  mr-7 bg-background-button rounded-lg">
                    <h3 id="id28" className="text-lg text-background">Adventure</h3>
                </div>

                <div className="w-[9rem] h-[3rem] flex items-center justify-center bg-background-button rounded-lg">
                    <h3 id="id28" className="text-lg text-background">Adventure</h3>
                </div>
            </article>

            {/* <div className="">
                        {movie.categories.map((category, index) => (
                            <h3 key={index} className="">{category}</h3>
                        ))}
                </div> */}
        </section>
    )
}

export default MovieDetails

// THE IDEA OF THIS COMPONENT IS TO SHOW THE DETAIL INFORMATION OF EVERY MOVIE SELECTED