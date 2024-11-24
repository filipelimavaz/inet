import { React, useState } from 'react'
import './ContactStyles.css'
import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'

import contactImg from '../../assets/imgs/2.jpg'

const Contact = () => {
  const [iframeLoaded, setIframeLoaded] = useState(true);

  return (
    <div>
      <Hero
        cName='hero mid'
        heroImg={contactImg}
        title='Contato'
      />

      <div className='contact'>
        <div className='contact-info'>
          <h2>Fale Conosco</h2>
          <p>Estamos sempre disponíveis em nossos meios de comunicação!</p>
          <div className='contact-info tel'>
            <h3><i className='fa-solid fa-phone'></i>Telefones:</h3>
            <a href="tel:+5583988007937">SAC: +55 83 98800-7937</a>
            <a href="tel:+558398644279">Vendas: +55 83 9864-4279</a>
          </div>
          <div>
            <h3><i className='fa-solid fa-envelope'></i>E-mail: </h3>
            <a href="mailto:inetnordeste@gmail.com">inetnordeste@gmail.com</a>
          </div>
          <div>
            <h3><i className='fa-solid fa-location-dot'></i>Endereço: </h3>
            <p>R. Est. Genilson Xavier de Moura Almeida, 275</p>
            <p>Gramame, João Pessoa. Paraíba</p>
            <p>CEP: 58068-353</p>
          </div>
          <div className='social-networks'>
            <h3>Redes sociais: </h3>
            <a href='https://www.instagram.com/inetnordeste/'><i className='fa-brands fa-square-instagram'></i></a>
            <a href='https://www.facebook.com/inetnordeste'><i className='fa-brands fa-square-facebook'></i></a>
            <a href='https://t.me/inetvendas/4'><i className='fa-brands fa-telegram'></i></a>
            <a href='https://api.whatsapp.com/message/IM4FGE2PLUHVI1'><i className='fa-brands fa-square-whatsapp'></i></a>
          </div>
        </div>
        <div className='contact-map'>
          <h2>Como chegar até nós</h2>
          {iframeLoaded && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7882.907660653399!2d-34.87777868120682!3d-7.21310160000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace89494bf446f%3A0xeadea9fcdf635b3d!2sR.%20Est.%20Genilson%20Xavier%20de%20Moura%20Almeida%2C%20275%20-%20Gramame%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058068-353!5e0!3m2!1spt-BR!2sbr!4v1692119705114"
            allowFullScreen=""
            loading="lazy"
          ></iframe>          
          )}
          {!iframeLoaded && (
            <button onClick={() => setIframeLoaded(true)}>Carregar Mapa</button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;