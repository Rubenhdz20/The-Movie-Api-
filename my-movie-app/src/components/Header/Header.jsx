

function Header() {
    return(
            
            <header className="flex items-center justify-center h-20 bg-background">
                <svg width="24" height="24" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.25 9C23.25 9.51777 22.8303 9.9375 22.3125 9.9375H1.6875C1.16973 9.9375 0.75 9.51777 0.75 9C0.75 8.48223 1.16973 8.0625 1.6875 8.0625H22.3125C22.8303 8.0625 23.25 8.48223 23.25 9ZM1.6875 2.4375H22.3125C22.8303 2.4375 23.25 2.01777 23.25 1.5C23.25 0.982233 22.8303 0.5625 22.3125 0.5625H1.6875C1.16973 0.5625 0.75 0.982233 0.75 1.5C0.75 2.01777 1.16973 2.4375 1.6875 2.4375ZM22.3125 15.5625H1.6875C1.16973 15.5625 0.75 15.9822 0.75 16.5C0.75 17.0178 1.16973 17.4375 1.6875 17.4375H22.3125C22.8303 17.4375 23.25 17.0178 23.25 16.5C23.25 15.9822 22.8303 15.5625 22.3125 15.5625Z" fill="white"/>
                </svg>
                <h1 className='ml-8 text-white'>The Grape Movies</h1>
            </header>
    )
}

export default Header;