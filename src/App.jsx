import React, { useState, useEffect } from 'react';
import './App.css';
import Body from './assets/components/Body.jsx';
import Header from './assets/components/Header.jsx';
import Footer from './assets/components/Footer.jsx';

function App() {
  const [headerBackground, setHeaderBackground] = useState('transparent');
  const [dropdownBackground, setDropdownBackground] = useState('black');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setHeaderBackground('white');
        setDropdownBackground('white'); // Update dropdownBackground here
      } else {
        setHeaderBackground('transparent');
        setDropdownBackground('black'); // Update dropdownBackground here
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Header background={headerBackground} dropdownBackground={dropdownBackground} />
      <Body />
      <Footer />
    </>
  );
}

export default App;
