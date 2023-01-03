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
              <Link className="nav-link text-color montserrat underline-hover-effect" href="https://www.instagram.com/sognomusic.ro/" target="_blank">Instagram</Link>
            </li>
            <li>
              <Link className="nav-link text-color montserrat underline-hover-effect" href="https://www.youtube.com/channel/UCenrHwE3KQm7XZ0kAfyjqrw" target="_blank">Youtube</Link>
            </li>
          </ul>
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
          © 2021 Copyright:
          <a className="text-dark text-color copyright merienda">Sogno </a>
        </div>
      </footer>
    </div>
  )
}
