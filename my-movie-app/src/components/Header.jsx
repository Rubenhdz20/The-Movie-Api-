import MobileMenu from './MobileMenu'

function Header() {
    return(
        <>
            <header>
                <MobileMenu/>
                <h1 className=''>The Grape Movies</h1>
                <form id='searchForm' className=''>
                    <input type="text" placeholder="Search your movie" />
                    <button id="searchBtn">🔍</button>
                </form>
            </header>
        </>
    )
}

export default Header;