import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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
      
      <div className="d-flex justify-content-start align-items-center background text-color ml-20">
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <p className="text-color-gray montserrat">Welcome to</p> 
                    <h1 className="text-color merienda">Sogno</h1>   
                    <p className="text-color-white montserrat effect">Sogno was created to give you a remarkable experience in different unique locations all over the world, where dreams are born and time is never planned.</p>
                </div>
                <div className="col-sm-8 center">
                    <Image className="logo" src="/logo.webp" alt="Logo" width={200} height={200} />
                </div>
            </div>
        </div>
      </div>
      <footer className="text-center text-lg-start navbar-grayer">
        <div className="text-center p-3  text-color montserrat">
          Made with love by  
          <Link className="text-dark text-color copyright merienda footer" href="/">Sogno</Link>
        </div>
      </footer>
    </div>
  )
}
