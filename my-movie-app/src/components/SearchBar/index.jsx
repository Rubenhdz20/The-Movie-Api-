
function SearchBar() {
    return(
        <section id="searchBar" className="flex items-center justify-center h-20 bg-background">
            <form id='searchForm' className=''>
                <input className="w-36 h-8" type="text" placeholder="Search your movie" />
                <button id="searchBtn" className="">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.84723 0C10.6289 0 13.6945 3.06561 13.6945 6.84723C13.6945 8.48291 13.1209 9.98458 12.164 11.1622L16.7925 15.7908C17.0692 16.0675 17.0692 16.5159 16.7925 16.7925C16.5411 17.044 16.1476 17.0669 15.8703 16.8611L15.7908 16.7925L11.1622 12.164C9.98459 13.1209 8.48292 13.6945 6.84723 13.6945C3.06561 13.6945 0 10.6289 0 6.84723C0 3.06561 3.06561 0 6.84723 0ZM6.84723 1.41667C3.84801 1.41667 1.41667 3.84801 1.41667 6.84723C1.41667 9.84641 3.84801 12.2778 6.84723 12.2778C9.84641 12.2778 12.2778 9.84641 12.2778 6.84723C12.2778 3.84801 9.84641 1.41667 6.84723 1.41667Z" fill="black"/>
                    </svg>
                </button>
            </form>
        </section>  
    )
}

export default SearchBar;