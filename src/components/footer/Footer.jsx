import React from 'react'
import { Link } from 'react-router-dom'

import './FooterStyles.css'

const Footer = () => {
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
          <a href='/'><i className='fa-brands fa-linkedin'></i></a>
          <a href='https://api.whatsapp.com/message/IM4FGE2PLUHVI1'><i className='fa-brands fa-square-whatsapp'></i></a>
        </div>
      </div>
      <div className='bottom'>
        <div>
          <h4>Website</h4>
          <Link to='/'>
            <a>Home</a>
          </Link>
          <Link to='/sobre'>
            <a>Institucional</a>
          </Link>
          <Link to='/servicos'>
            <a>Planos</a>
          </Link>
          <Link to='/contato'>
            <a>Contato</a>
          </Link>
        </div>
        <div>
          <h4>Redes Sociais</h4>
          <a href="https://www.instagram.com/inetnordeste/">Instagram</a>
          <a href="https://www.facebook.com/inetnordeste">Facebook</a>
          <a href="./">Telegram</a>
          <a href="https://api.whatsapp.com/message/IM4FGE2PLUHVI1">Whastapp</a>
        </div>
        <div className='last'>
          <h4>Contate-nos</h4>
          <a href="tel:83900000000">Tel: 83 90000-0000</a>
          <a href="mailto:inetnordeste@gmail.com">E-mail: inetnordeste@gmail.com</a>
        </div>
        <div className='last'>
          <h4>Outros</h4>
          <a href="./">Termos de Serviço</a>
          <a href="./">Política de Privacidade</a>
          <a href="./">Licença</a>
        </div>
      </div>
      <p>© Copyright 2024 – Todos os direitos reservados: iNet Telecomunicações</p>
    </div>
  )
}

export default Footer