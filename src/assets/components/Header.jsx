import React, { useState, useEffect } from 'react';
import '../../styles/Header.css';
import Logo from '../../../Logotype 2-02.png';
import Cross from '../../../close_FILL0_wght400_GRAD0_opsz48.svg'
import Menu from '../../../menu_FILL0_wght400_GRAD0_opsz48.svg';
import { Link } from 'react-router-dom';


const Header = ({ background, dropdownBackground }) => {
    const [scrollBackground, setScrollBackground] = useState(false);
    const [scrollLeft, setScrollLeft] = useState(false);
    const [showModal, setShowModal] = useState(false); // State for controlling the modal visibility

    const [showDropdown, setShowDropdown] = useState(false);
    const [headerVisible, setHeaderVisible] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            if (scrollTop > 0) {
                setScrollBackground(true);
                setScrollLeft(true);

            } else {
                setScrollBackground(false);
                setScrollLeft(false);

            }

            if (window.innerWidth <= 767) {
                // For mobile devices
                if (scrollTop > 0) {
                    setHeaderVisible(true);
                } else {
                    setHeaderVisible(false);
                }
            } else {
                // For computers
                setHeaderVisible(true);
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (event, targetId) => {
        event.preventDefault();
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLogoClick = () => {
        window.location.href = "/";
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <header style={{ backgroundColor: background }}>
            {/* Header Logo */}
            < img
                src={Logo}
                id="HeaderLogo"
                alt="Logo"
                onClick={handleLogoClick}
                style={{ cursor: 'pointer' }}
            />

            {/* Navigation Links */}
            <nav>
                <ul
                    className={`nav-links ${scrollBackground ? 'black' : ''} ${scrollLeft ? 'scroll-left' : ''
                        }`}
                >
                    <li onClick={(event) => scrollToSection(event, 'Benefits')}>
                        BENEFICIOS
                    </li>
                    <li onClick={(event) => scrollToSection(event, 'Products')}>
                        ICE PODS
                    </li>
                    <li onClick={openModal}>SOBRE NOSOTROS</li>
                    <li onClick={(event) => scrollToSection(event, 'FAQs')}>
                        INFORMACIÓN DE USO
                    </li>
                </ul>

            </nav>

            <div className={`dropdown ${dropdownBackground === 'white' ? 'white-dropdown' : 'black-dropdown'}`}>
                <button id="DropdownButton" onClick={toggleDropdown}>
                    <img src={Menu} alt="Menu" />
                </button>
                {showDropdown && (
                    <div className="dropdown-content" style={{ backgroundColor: dropdownBackground }}>
                        <button className={`dropdownButton ${dropdownBackground === 'white' ? 'white-dropdown' : 'black-dropdown'}`} onClick={(event) => scrollToSection(event, 'Benefits')}> BENEFICIOS </button>
                        <button className={`dropdownButton ${dropdownBackground === 'white' ? 'white-dropdown' : 'black-dropdown'}`} onClick={(event) => scrollToSection(event, 'Products')}>ICE PODS</button>
                        <button className={`dropdownButton ${dropdownBackground === 'white' ? 'white-dropdown' : 'black-dropdown'}`} onClick={openModal}>SOBRE NOSOTROS</button>
                        <button className={`dropdownButton ${dropdownBackground === 'white' ? 'white-dropdown' : 'black-dropdown'}`} onClick={(event) => scrollToSection(event, 'FAQs')}>INFORMACIÓN DE USO</button>
                    </div>
                )}
            </div>



            {/* Modal */}
            {
                showModal && (
                    <div id="Modal">
                        <div className="ModalContent">
                            <p id="ModalTitle"> SOBRE NOSOTROS</p>
                            <p id="ModalText">
                                Polar surge en 2023 como resultado de la pasión y dedicación de dos entusiastas del bienestar personal, con el objetivo de expandir esta práctica a nuestro país. <br /> <br />

                                Nuestra misión es inspirar y facilitar el camino hacia una vida más saludable, proporcionando un instrumento que consdieramos vital para empezar en este camino. <br /> <br />

                                Trabajamos constantemente para desarrollar soluciones que marquen la diferencia en la vida de nuestros clientes. Valoramos la satisfacción de ellos y nos enorgullece ofrecer una experiencia excepcional, desde la calidad de nuestros productos hasta nuestro servicio al cliente. Te invitamos a unirte a nosotros en este emocionante viaje hacia una vida más plena y equilibrada.<br /> </p>

                            <img src={Cross} id="Cross" onClick={closeModal}></img>

                        </div>
                    </div>
                )
            }
        </header >
    );
};
export default Header;
