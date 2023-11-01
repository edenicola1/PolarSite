
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Logo from '../../../Logotype 2-02.png';
import Cross from '../../../close_FILL0_wght400_GRAD0_opsz48.svg';
import "../../styles/IcePodyCovertor.css";
import PodPic from '../../../Render Tub + Tapas + 1080.1080.jpg';
import Sum from '../../../add_FILL0_wght400_GRAD0_opsz48.svg'

import emailjs from 'emailjs-com';


import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const IcePodyCovertor = ({ dropdownBackground }) => {
  const [showModal, setShowModal] = useState(false); // State for controlling the modal visibility
  const [showContactModal, setShowContactModal] = useState(false)
  const [showEspecificaciones, setShowEspecificaciones] = useState(false);
  const [showEnvio, setShowEnvio] = useState(false);
  const [showPrecauciones, setShowPrecauciones] = useState(false);


  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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



  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const openModal = () => {
    setShowModal(true);

  };

  const openContactModal = () => {
    setShowContactModal(true)
  }

  const closeContactModal = () => {
    setShowContactModal(false)
  }

  const closeModal = () => {
    setShowModal(false);

  };

  const toggleEspecificaciones = () => {
    setShowEspecificaciones(!showEspecificaciones);
    setShowEnvio(false);
    setShowPrecauciones(false);
  };

  const toggleEnvio = () => {
    setShowEnvio(!showEnvio);
    setShowEspecificaciones(false);
    setShowPrecauciones(false);
  };

  const togglePrecauciones = () => {
    setShowPrecauciones(!showPrecauciones);
    setShowEspecificaciones(false);
    setShowEnvio(false);
  };

  return (
    <div>
      <div id="header">
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
          <ul>
            <li> <a href="/icepod">
              ICE POD
            </a>
            </li>

            <li> <a href="/icepodycovertor">
              ICE POD + COBERTOR
            </a>
            </li>

            <li > <a href="/icepodycovertorymochila">
              ICE POD COMPLETO
            </a>
            </li>

            <li onClick={openContactModal}>
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
        </div>



      </div>



      <section id="Contenido">


        <div id="Carousel">
          <Carousel showArrows={false} showThumbs={true} infiniteLoop={true} showStatus={false} showIndicators={false}>
            <div id="PodPic">
              <img id="PodPic" src={PodPic} alt="Product Image" />
            </div>


          </Carousel>
        </div>




        <div id="PodInfo">
          <p id="PodTitle">Ice Pod + Cobertor</p>
          <p id="PodPrecio1">$190.00 USD</p>
          <p id="PodSubtitle">Tu propio Baño de Hielo Portátil</p>
          <p id="PodParagraph">
            Descubrí el Polar Ice Pod, el baño de hielo portátil definitivo para la recuperación profesional. Diseñado con precisión y pensado para brindarte una experiencia única de terapia con agua fría. Con el Polar Ice Pod, podrás disfrutar de los beneficios de la terapia con agua fría en cualquier momento y lugar. Su diseño compacto y portátil te permite llevarlo contigo a donde vayas, ya sea en interiores o al aire libre. Sumérgete en un baño de hielo revitalizante y potencia tu recuperación con el Polar Ice Pod. El cobertor es la pieza ideal para cuando el Ice Pod es intalado a la interperie para proteger el agua y mantenerla a bajas temperaturas.
          </p>
          <button id="Agregar" onClick={openContactModal}> Contactanos </button>
          <div id="Info">
            <p className="InfoItem" onClick={toggleEspecificaciones}>
              Especificaciones
              <img id="Sum" src={Sum} />
            </p>
            {showEspecificaciones && (
              <p className="InfoText">
                <li>Altura de 75 cm. </li>
                <li> Diámetro de 80 cm. </li>
                <li>Capacidad de 320 litros. </li>
                <li>Peso vacío de 3.5 kg. </li>
                <li>Peso lleno de 320 kg. </li>
                <li>3 capas aislantes de TPE. </li>
                <li>Capa externa reforzada de tela de poliéster de rip-stop. </li>
                <li>Revestimiento interior de PVC resistente a los rayos UV y que cuida la piel. </li>
                <li>Tapa térmica para mantener el agua a una temperatura constante. </li>

              </p>
            )}
            <p className="InfoItem" onClick={toggleEnvio}>
              Envío
              <img id="Sum" src={Sum} />
            </p>
            {showEnvio && (
              <p className="InfoText">
                Envíos a todo el país coordinando previamente.
              </p>
            )}
            <p className="InfoItem" onClick={togglePrecauciones}>
              Precauciones
              <img id="Sum" src={Sum} />
            </p>
            {showPrecauciones && (
              <p className="InfoText">
                <li>Antes de usar el Polar IcePod, limpiar el interior con agua tibia y jabón y secarlo con un paño seco y limpio. </li>
                <li> Nunca limpiar tu Polar IcePod con detergentes y productos químicos fabricados con lejía. Esto puede degradar el material y afectar el sellado impermeable. </li>
                <li>Se recomienda drenar, limpiar y secar tu Polar IcePod cada 20 días. </li>
                <li>En caso de llenar con agua caliente, que esta no supere los 50°C. </li>
              </p>
            )}
          </div>
        </div>

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
                  <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="5" required />

                  <button type="submit" id="ContactButton">Enviar</button>
                </form>
                <p>{status}</p>
              </p>
              <img src={Cross} id="ContactCross" onClick={closeContactModal}></img>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}



export default IcePodyCovertor