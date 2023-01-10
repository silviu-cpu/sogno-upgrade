import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

export default function Contact() {
    return (
        <div>
            <Navbar />
            <div class="container-fluid background center2">
                <div class="card">
                    <div class="card-body text-center">
                        <h2 class="merienda text-color">Contact Us</h2>
                        <p class="montserrat text-color"> For bussines inquires please contact us </p>
                    </div>
                    <div class="card-body text-center montserrat">
                        E-mail: contact@sogno.ro
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}