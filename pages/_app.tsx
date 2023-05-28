import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/events.scss'
import '../styles/contact.scss'
import '../styles/home.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />
}
