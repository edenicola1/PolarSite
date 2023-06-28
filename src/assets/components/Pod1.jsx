import React, { useState } from 'react'
import Logo from '../../../Logotype 2-02.png';
import Cross from '../../../close_FILL0_wght400_GRAD0_opsz48.svg'
import "../../styles/Pod1.css"
import PodPic from '../../../Screenshot 2023-06-27 at 12.21.56.png'

function Pod1() {
    const [showModal, setShowModal] = useState(false); // State for controlling the modal visibility

    const handleLogoClick = () => {
        window.location.href = window.location.origin + window.location.pathname;
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <div>
            <header>
                {/* Header Logo */}
                <img
                    src={Logo}
                    id="HeaderLogo"
                    alt="Logo"
                    onClick={handleLogoClick}
                    style={{ cursor: 'pointer' }}
                />

                {/* Navigation Links */}
                <nav>
                    <ul>
                        <li>

                            BENEFICIOS

                        </li>
                        <li>

                            PODS

                        </li>
                        <li onClick={openModal}>

                            SOBRE NOSOTROS

                        </li>
                        <li>

                            INFORMACIÓN DE USO

                        </li>
                    </ul>
                </nav>

                {/* Modal */}
                {showModal && (
                    <div id="Modal">
                        <div className="ModalContent">
                            <p id="ModalTitle">SOBRE NOSOTROS</p>
                            <p id="ModalText">
                                Polar surge en 2023 como resultado de la pasión y dedicación de dos entusiastas del bienestar personal, con el objetivo de expandir esta práctica a nuestro país.

                                Nuestra misión es inspirar y facilitar el camino hacia una vida más saludable, proporcionando el instrumento vital para empezar en este camino.

                                Trabajamos constantemente para desarrollar soluciones que marquen la diferencia en la vida de nuestros clientes. Valoramos la satisfacción de ellos y nos enorgullece ofrecer una experiencia excepcional, desde la calidad de nuestros productos hasta nuestro servicio al cliente. Te invitamos a unirte a nosotros en este emocionante viaje hacia una vida más plena y equilibrada, donde juntos podemos crear un impacto positivo en el mundo del bienestar y marcar la diferencia en la vida de las personas.</p>

                            <img src={Cross} id="Cross" onClick={closeModal}></img>

                        </div>
                    </div>
                )}
            </header>


            <section id="Contenido">
                <div id="Carousel">
                    <img id="PodPic" src={PodPic}></img>
                </div>
                <div id="PodInfo">
                    <p id="PodTitle"> Ice Pod + Covertor </p>
                    <p id="PodPrecio"> $180.00 USD </p>
                    <p id="PodSubtitle"> Tu propio Baño de Hielo Portátil </p>
                    <p id="PodParagraph"> Descubrí el Polar Ice Pod, el baño de hielo portátil definitivo para la recuperación profesional. Diseñado con precisión y pensado para brindarte una experiencia única de terapia con agua fría. Con el Polar Ice Pod, podrás disfrutar de los beneficios de la terapia con agua fría en cualquier momento y lugar. Su diseño compacto y portátil te permite llevarlo contigo a donde vayas, ya sea en interiores o al aire libre. Sumérgete en un baño de hielo revitalizante y potencia tu recuperación con el Polar Ice Pod. </p>
                    <button id="Agregar"> Agregar al Carrito </button>
                </div>

            </section>

        </div>
    )
}

export default Pod1