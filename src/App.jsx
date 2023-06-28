import { useState, useEffect } from 'react'
import './App.css'
import Body from "./assets/components/Body.jsx"
import Header from './assets/components/Header.jsx'
import Footer from "./assets/components/Footer.jsx"

function App() {
  const [headerBackground, setHeaderBackground] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setHeaderBackground('white');
      } else {
        setHeaderBackground('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Set the scroll behavior to smooth
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      // Reset the scroll behavior when the component unmounts
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Header background={headerBackground} />
      <Body />
      <Footer />
    </>
  )
}

export default App

