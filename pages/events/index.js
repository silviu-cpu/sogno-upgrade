import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { motion  } from 'framer-motion'
import images from '../../images/images'

export default function Events() {
    return (
        <div>
            <Navbar />
            <div className='App'>
                <motion.div className='carousel'> 
                    <motion.div className='inner-carousel'>
                        {images.map( ({key, value}) => {
                            return (
                                <motion.div key={key}><img src={value} alt="" /></motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}