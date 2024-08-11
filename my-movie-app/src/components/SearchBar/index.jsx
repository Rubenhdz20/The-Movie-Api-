
function SearchBar() {
    return(
        <div className="">
            <form id='searchForm' className=''>
                <input type="text" placeholder="Search your movie" />
                <button id="searchBtn">🔍</button>
            </form>
        </div>  
    )
}

export default SearchBar;