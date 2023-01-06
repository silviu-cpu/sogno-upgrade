import Link from 'next/link';


export default function Navbar() {
    return (
        <div>
            <div className="container-fluid p-0">
                <nav className="navbar navbar-grayer navbar-expand-md  position-center">     
                <ul className="nav">
                    <li>
                    <Link className="nav-link text-color montserrat underline-hover-effect" href="https://www.facebook.com/sognomusic" target="_blank">Facebook</Link>
                    </li>
                    <li>
                    <Link className="nav-link text-color montserrat underline-hover-effect" href="https://www.instagram.com/sogno.ro/" target="_blank">Instagram</Link>
                    </li>
                    <li>
                    <Link className="nav-link text-color montserrat underline-hover-effect" href="https://www.youtube.com/channel/UCenrHwE3KQm7XZ0kAfyjqrw" target="_blank">Youtube</Link>
                    </li>
                </ul>
                </nav>
            </div>

        <div className="center-nav">
            <nav className="navbar navbar-expand-md navbar-gray text-color">
                <Link href="/" className="navbar-brand text-color merienda">Sogno - Art Creators</Link>

                <button
                    className="navbar-toggler" 
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#toggleMobileMenu"
                    aria-controls="toggleMobileMenu"
                    aria-expanded="true"
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="collapse navbar-collapse" id="toggleMobileMenu">
                    <ul className="navbar-nav ms-auto text-center">
                    <li>
                        <Link className="nav-link text-color montserrat underline-hover-effect" href='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link text-color montserrat underline-hover-effect" href='/events'>Events</Link>
                    </li>
                    <li>
                        <Link className="nav-link text-color montserrat underline-hover-effect" href='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link className="nav-link text-color montserrat underline-hover-effect"  href="https://www.youtube.com/channel/UCenrHwE3KQm7XZ0kAfyjqrw" target="_blank">Our Videos</Link>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>

        </div>
    )
}
