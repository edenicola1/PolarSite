import React, { useEffect, useState } from 'react';
import '../../styles/Footer.css';
import Logo from "../../../Logotype 2-02.png";
import MailLogo from "../../../mail_FILL0_wght400_GRAD0_opsz48.png";
import PhoneLogo from "../../../call_FILL0_wght400_GRAD0_opsz48.png";
import WppLogo from "../../../whatsapp.svg";
import emailjs from 'emailjs-com';
import Cross from '../../../close_FILL0_wght400_GRAD0_opsz48.svg'
import ManualDeUsoPDF from '../../../Manual.pdf';



const Footer = () => {
    const [showModal, setShowModal] = useState(false); // State for controlling the modal visibility
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [showContactModal, setShowContactModal] = useState(false)

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

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.getElementById('FooterContainer');
            const footerOffset = footer.offsetTop;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;

            if (scrollY > footerOffset - windowHeight) {
                // Footer is in view
                footer.classList.add('animate-footer');
            } else {
                // Footer is out of view
                footer.classList.remove('animate-footer');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };


    const handleManualDeUsoClick = () => {
        // Open the PDF in a new browser window
        window.open(ManualDeUsoPDF, '_blank');
    }


    const openContactModal = () => {
        setShowContactModal(true)
    }

    const closeContactModal = () => {
        setShowContactModal(false)
    }


    return (

        <footer id="FooterContainer">


            <section id="FooterLinks">
                <div className="footer-column">
                    <h3>Shop</h3>
                    <ul>
                        <li><a href="/icepod">Pod de inmersión en frío</a></li>

                        <li><a href="/icepodycovertor">Pod de inmersión en frío + Covertor</a></li>
                        <li><a href="/icepodycovertorymochila">Pod de inmersión en frío Completo</a></li>

                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Info</h3>
                    <ul>

                        <li><a href="/enviosydevoluciones">Términos & Condiciones</a></li>
                        <li onClick={handleManualDeUsoClick}>
                            Manual de Uso
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contactanos</h3>

                    <ul onClick={openContactModal} style={{ cursor: 'pointer' }}>
                        <img id="Mail" src={MailLogo}></img>
                    </ul>

                    <ul style={{ cursor: 'pointer' }}>
                        <a href="https://wa.me/59895797033" target="_blank">
                            <img id="Wpp" src={WppLogo}></img>
                        </a>
                    </ul>
                    {/* <form onSubmit={sendEmail} id="ContactForm">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                        <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="5" required />

                        <button type="submit">Enviar</button>
                    </form>
                    <p>{status}</p> */}

                </div>
            </section>

            <section id="FooterInfo">

                <img src={Logo} id="FooterLogo" alt="Logo"></img>
                <p id="CompanyInfo">© 2023, Polar. - Todos los derechos reservados.</p>
            </section>

            {/* {showModal && (
                <div id="Modal">
                    <div className="ModalContent">
                        <p id="ModalTitle"> SOBRE NOSOTROS</p>
                        <p id="ModalText">
                            Polar surge en 2023 como resultado de la pasión y dedicación de dos entusiastas del bienestar personal, con el objetivo de expandir esta práctica a nuestro país.

                            Nuestra misión es inspirar y facilitar el camino hacia una vida más saludable, proporcionando el instrumento vital para empezar en este camino.

                            Trabajamos constantemente para desarrollar soluciones que marquen la diferencia en la vida de nuestros clientes. Valoramos la satisfacción de ellos y nos enorgullece ofrecer una experiencia excepcional, desde la calidad de nuestros productos hasta nuestro servicio al cliente. Te invitamos a unirte a nosotros en este emocionante viaje hacia una vida más plena y equilibrada. </p>

                        <img src={Cross} id="Cross" onClick={closeModal}></img>

                    </div>
                </div>
            )} */}

            {showContactModal && (
                <div id="ContactModal1" className="active">
                    <div className="ContactModalContent">
                        <p id="ContactModalTitle">CONTACTANOS</p>
                        <p id="ContactModalText">
                            <form onSubmit={sendEmail} id="ContactForm1">
                                <label htmlFor="name">Nombre:</label>
                                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                                <label htmlFor="message">Mensaje:</label>
                                <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="5" required />

                                <button type="submit" id="ContactButton">Enviar</button>
                            </form>
                            <p>{status}</p>
                        </p>
                        <img src={Cross} id="ContactCross" onClick={closeContactModal}></img>
                    </div>
                </div>
            )}

        </footer>
    );
};

export default Footer;
