import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <div>
            <footer className="text-center text-lg-start navbar-grayer">
                <div className="text-center p-3  text-color montserrat">
                    <span className='pr'>Made with</span> <FontAwesomeIcon icon={faHeart} />   
                    <Link className="copyright merienda footer pl" href="/">by Sogno</Link>
                </div>
            </footer>
        </div>
    )
}