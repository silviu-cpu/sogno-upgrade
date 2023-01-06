import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { motion  } from 'framer-motion'


export default function Events() {
    return (
        <div>
            <Navbar />
            <div className='App'>
                <motion.div> </motion.div>
            </div>
            <Footer />
        </div>
    )
}