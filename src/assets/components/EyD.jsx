import React, { useState, useEffect } from 'react'
import Header from "./Header.jsx";
import "../../styles/EyD.css"
import Logo from '../../../Logotype 2-02.png';
import Cross from '../../../close_FILL0_wght400_GRAD0_opsz48.svg'
import MenuBlanco from '../../../menublanco.svg';

const EyD = ({ dropdownBackground }) => {
    const [showContactModal, setShowContactModal] = useState(false)
    const [showModal, setShowModal] = useState(false); // State for controlling the modal visibility

    const [showDropdown, setShowDropdown] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_yzzokmc', 'template_i3a8wtm', e.target, 'yVNkcsbGHPpUpoBGc')
            .then((result) => {
                console.log(result.text);
                setStatus('Mail enviado exitosamente!');
            })
            .catch((error) => {
                console.error(error);
                setStatus('Error al enviar mail...');
            });
    };


    const openContactModal = () => {
        setShowContactModal(true)
    }

    const closeContactModal = () => {
        setShowContactModal(false)
    }


    const handleLogoClick = () => {
        window.location.href = "/";
    };


    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div>
            <header >
                {/* Header Logo */}
                <img
                    src={Logo}
                    id="HeaderLogo1"
                    alt="Logo"
                    onClick={handleLogoClick}
                    style={{ cursor: 'pointer' }}
                />

                {/* Navigation Links */}
                <nav>
                    <ul

                    >
                        <a href="/icepod">
                            <li
                            >
                                ICE PODS

                            </li>
                        </a>
                        <li
                            onClick={openModal}>
                            SOBRE NOSOTROS

                        </li>
                        <li onClick={openContactModal}
                        >
                            CONTACTO

                        </li>

                    </ul>
                </nav>

                {/* Modal */}
                {showModal && (
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
                )}

                <div className={`dropdown ${dropdownBackground === 'white' ? 'white-dropdown' : 'black-dropdown'}`}>
                    <img
                        src={Logo}
                        id="HeaderLogo2"
                        alt="Logo"
                        onClick={handleLogoClick}
                        style={{ cursor: 'pointer' }}
                    />


                    {showDropdown && (
                        <div className="dropdown-content" style={{ backgroundColor: dropdownBackground }}>
                            <button className={`dropdownButton ${dropdownBackground === 'white' ? 'white-dropdown' : 'black-dropdown'}`} onClick={(event) => scrollToSection(event, 'Benefits')}> BENEFICIOS </button>
                            <button className={`dropdownButton ${dropdownBackground === 'white' ? 'white-dropdown' : 'black-dropdown'}`} onClick={(event) => scrollToSection(event, 'Products')}>ICE PODS</button>
                            <button className={`dropdownButton ${dropdownBackground === 'white' ? 'white-dropdown' : 'black-dropdown'}`} onClick={openModal}>SOBRE NOSOTROS</button>
                            <button className={`dropdownButton ${dropdownBackground === 'white' ? 'white-dropdown' : 'black-dropdown'}`} onClick={(event) => scrollToSection(event, 'FAQs')}>INFORMACIÓN DE USO</button>
                        </div>
                    )}
                </div>

            </header>




            <p id="EyDTitle"> Términos & Condiciones </p>
            <p id="EyDSubtitle"> Política de Envíos</p>
            <p id="EyDInfo"> Polar le ofrece a sus clientes coordinar personalmente el envío de cada Ice Pod, con la posibilidad de envío a cualquier parte del país y en menos de siete días. De ser necesario, también es posible coordinar envíos regionales e internacionales, con un plazo de entrega mayor.</p>
            <p id="EyDSubtitle"> Envíos sin cargo </p>
            <p id="EyDInfo"> En pedidos de dos o más unidades de Ice Pods, el envío es gratuito! </p>
            <p id="EyDSubtitle"> Política de Devoluciones</p>
            <p id="EyDInfo"> Confiamos en que nuestros clientes estarán satisfechos con su compra de productos Polar. Sin embargo, si no estás completamente satisfecho, podes devolver el artículo dentro de 90 días después su entrega. Los productos deben ser devueltos sin haber sido usados, en su estado original y en su empaque original. Se aplicará un cargo por reposición para los productos abiertos y utilizados.</p>
            <p id="EyDSubtitle"> Política de Cambios </p>
            <p id="EyDInfo"> Contactanos en el caso de que desees cambiar el Ice Pod por otro modelo o por el estado del mismo. Confiamos en la calidad de nuestros productos, pero si un producto se considera defectuoso, te ofreceremos un reemplazo. Debes proporcionar una prueba de compra, y también nos reservamos el derecho de inspeccionar el artículo para determinar si califica como defectuoso.</p>





            {showContactModal && (
                <div id="ContactModal">
                    <div className="ContactModalContent">
                        <p id="ContactModalTitle">CONTACTANOS</p>
                        <p id="ContactModalText">
                            <form onSubmit={sendEmail} id="ContactForm1">
                                <label htmlFor="name">Nombre:</label>
                                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                                <label htmlFor="message">Mensaje:</label>
                                <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="7" required />

                                <button type="submit" id="ContactButton">Enviar</button>
                            </form>
                            <p>{status}</p>
                        </p>
                        <img src={Cross} id="ContactCross" onClick={closeContactModal}></img>
                    </div>
                </div>
            )}

        </div>
    )
}

export default EyD