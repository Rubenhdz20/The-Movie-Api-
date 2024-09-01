import React from 'react';
import ArrowButton from '../../components/ArrowButton';


function MovieDetails({ movie }) {
    return(
        <section id="movieDetails" className="flex flex-col items-center justify-center bg-background text-white">
            <div className="flex space-x-28 p-10">
                <ArrowButton></ArrowButton>
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