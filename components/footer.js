import Link from 'next/link';

export default function Footer() {
    return (
        <div>
            <footer className="text-center text-lg-start navbar-grayer">
                <div className="text-center p-3  text-color montserrat">
                    Made with love by  
                    <Link className="text-dark text-color copyright merienda footer" href="/">Sogno</Link>
                </div>
            </footer>
        </div>
    )
}