import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import images from '../images/images'
import {useState} from "react"
import db from '../utils/firebase';
import { FirebaseError } from 'firebase/app'
import firebase from 'firebase/app'
import "firebase/firestore";
import { collection, addDoc } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore'
import { setMaxListeners } from 'events'

export default function Home() {
  const [input, setInput] = useState('');
  const inputHandler = (e) => {
    setInput(e.target.value);
  }
  const submitHandler =  (e) => {
    e.preventDefault();
    if(input) {
      
      //firebase add
       addDoc(collection(db,"emails") , {
        email:input,
        time: serverTimestamp(),
       });
       setInput('');
    }
  }
  return (
   
    <div>
      < Navbar />
      <div className="d-flex justify-content-start align-items-center background text-color ml-20">
        <div className="container">
            <div className="row col-sm-12 col-lg-12 col-xxl-12">
                <div className="col-sm-4 col-lg-6 col-xxl-5">
                    <p className="text-color-gray montserrat">Welcome to</p> 
                    <h1 className="text-color merienda">Sogno</h1>   
                    <p className="text-color-white montserrat effect">Sogno was created to give you a remarkable experience in different unique locations all over the world, where dreams are born and time is never planned.</p>
                    <h3 className="text-color merienda">Subscribe to our next events</h3>
                    <div className='form__group field'>
                    <form onSubmit={submitHandler} >
                      <input
                        type="email"
                        placeholder='Email'
                        onChange={inputHandler}
                        className="form__field"
                        value={input}
                      />
                      <label className="form__label">Email</label>
                      <div className="input-group-append">
                      <button type="submit" className='btn btn-success'>Submit</button>
                      </div>
                    </form>
                    </div>
                </div>
                <div className="col-sm-8 col-lg-6 col-xxl-7 center">
                    <Image className="logo" src="/logo.webp" alt="Logo" width={200} height={200} />
                </div> 
            </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
