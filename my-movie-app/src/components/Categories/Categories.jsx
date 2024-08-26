
function Categories() {
    return(
        <section id="categories" className="bg-background text-white">
            <h2 className="ml-5 mt-16 text-xl">Categories</h2>
            <article className="flex justify-between p-9">
                <div className="w-[9rem] h-[3rem] flex items-center justify-center bg-background-button rounded-lg">
                    <h3 id="id28" className="text-lg text-background">Adventure</h3>
                </div>

                <div className="w-[9rem] h-[3rem] flex items-center justify-center bg-background-button rounded-lg">
                    <h3 id="id28" className="text-lg text-background">Adventure</h3>
                </div>
            </article>
        </section>
    )
}

export default Categories;

{/* <div className="categories">
      {categories.map((category, index) => (
        <button key={index} className="category-button">{category.name}</button>
      ))}
    </div> */}