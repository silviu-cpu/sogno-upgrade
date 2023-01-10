import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { useState } from 'react'
import images from '../../images/images'
import { Carousel } from 'react-bootstrap'

export default function Events() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <div>
            <Navbar />
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {images.map((item) => (
                    <Carousel.Item key={item.id} className='itemP' interval={4000}>
                        <img src={item.src} alt='slides' />
                        <Carousel.Caption className='caption'>
                            <h3>{item.titlu}</h3>
                            <p>{item.descriere}</p>
                            <a href={item.link} target="_blank" className='btn btn-danger spatiu' rel="noreferrer"> View the event </a>
                            <h2> Subscribe below for our next events </h2>
                            
                            <div className='form__group field'>
                                <input type='email' placeholder='Enter your email' class="form__field"></input>
                                <label className='form__label'> Email </label>
                            </div>
                            
                        </Carousel.Caption>
                    </Carousel.Item> 
                ))}
            </Carousel>
            <Footer />
        </div>
    )
}