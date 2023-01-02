import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    
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
  
  )
}
