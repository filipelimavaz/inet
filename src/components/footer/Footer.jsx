import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './FooterStyles.css';

const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='footer'>
      <div className='top'>
        <div>
          <h1>iNet Telecomunicações</h1>
          <p>Tudo que você espera do provedor de internet</p>
        </div>
        <div>
          <a href='https://www.instagram.com/inetnordeste/'><i className='fa-brands fa-square-instagram'></i></a>
          <a href='https://www.facebook.com/inetnordeste'><i className='fa-brands fa-square-facebook'></i></a>
          <a href='https://api.whatsapp.com/message/IM4FGE2PLUHVI1'><i className='fa-brands fa-square-whatsapp'></i></a>
          <a href='https://t.me/inetvendas/4'><i className='fa-brands fa-telegram'></i></a>
        </div>
      </div>
      <div className='bottom'>
        <div>
          <h4>Website</h4>
          <Link to="/">Home</Link>
          <Link to="/sobre">Institucional</Link>
          <Link to="/servicos">Planos</Link>
          <Link to="/contato">Contato</Link>
        </div>
        <div>
          <h4>Redes Sociais</h4>
          <a href="https://www.instagram.com/inetnordeste/">Instagram</a>
          <a href="https://www.facebook.com/inetnordeste">Facebook</a>
          <a href="https://t.me/inetvendas/4">Telegram</a>
          <a href="https://api.whatsapp.com/message/IM4FGE2PLUHVI1">Whatsapp</a>
        </div>
        <div className='last'>
          <h4>Contate-nos</h4>
          <a href="tel:+5583988007937">Tel: +55 83 98800-7937</a>
          <a href="mailto:inetnordeste@gmail.com">E-mail: inetnordeste@gmail.com</a>
          <a>R. Est. Genilson Xavier de Moura Almeida, 275</a>
          <a>Gramame, João Pessoa. PB. 58068-353</a>
        </div>
        <div className='last'>
          <h4>Outros</h4>
          <a 
            href="/documents/POLITICA_PRIVACIDADE_INETTELECOMUNICACOES.pdf" 
            download="POLITICA_PRIVACIDADE_INETTELECOMUNICACOES.pdf"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
      <p>© Copyright 2024 – Todos os direitos reservados: iNet Telecomunicações</p>
    </div>
  );
};

export default Footer;
