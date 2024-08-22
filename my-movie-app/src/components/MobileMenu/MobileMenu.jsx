
function MobileMenu() {
    return(
        <>
            <section className="h-full p-9 bg-background text-white">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.6666 10.6833L29.3166 8.33334L19.9999 17.65L10.6833 8.33334L8.33325 10.6833L17.6499 20L8.33325 29.3167L10.6833 31.6667L19.9999 22.35L29.3166 31.6667L31.6666 29.3167L22.3499 20L31.6666 10.6833Z" fill="#1CE783"/>
                </svg>
                <nav className="flex flex-col flex-wrap content-center justify-center mt-10">
                    <ul className="flex flex-col content-center justify-center">
                        <li className="w-[15rem] flex content-center justify-center mt-4 p-3 cursor-pointer bg-background-button text-content-color rounded-lg">
                            <a href="#">HOME</a>
                        </li>
                        <li className="w-[15rem] flex content-center justify-center mt-4 p-3 cursor-pointer bg-background-button text-content-color rounded-lg">
                            <a href="#">TRENDING</a>
                        </li>
                        <li className="w-[15rem] flex content-center justify-center mt-4 p-3 cursor-pointer bg-background-button text-content-color rounded-lg">
                            <a href="#">TOP RATED</a>
                        </li>
                        <li className="w-[15rem] flex content-center justify-center mt-4 p-3 cursor-pointer bg-background-button text-content-color rounded-lg">
                            <a href="#">UPCOMING</a>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default MobileMenu;