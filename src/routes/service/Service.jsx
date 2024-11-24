import './ServiceStyles.css';
import React from 'react';
import Hero from '../../components/hero/Hero';
import serviceImg from '../../assets/imgs/4.jpg';
import Button from '../../components/button/Button';
import Footer from '../../components/footer/Footer';
import ServiceInfoCard from '../../components/serviceinfocard/ServiceInfoCard';
import PlanContainer from '../../components/plancontainer/PlanContainer';

import servicesData from './servicesData.json';

const Service = () => {
  return (
    <div>
      <Hero
        cName='hero mid'
        heroImg={serviceImg}
        title='Serviços'
      />

      <div className='service-container'>
        <h2>Nossos Serviços</h2>
        <p>Conheça os nossos serviços</p>

        <p id="intro-text">{servicesData.introText}</p>

        <div className='service-info-card-container'>
          {servicesData.services.map((service, index) => (
            <ServiceInfoCard 
              key={index}
              iconClass={service.iconClass}
              title={service.title}
              services={service.services}
            />
          ))}
        </div>

        <PlanContainer
          sessionTitle="Nossos Planos"
          sessionText="Oferecemos os melhores planos para a necessidade do cliente."
          plans={servicesData.plans}
          url="https://wa.me/83998644279"
        />

        <div id="important">
          <h3>
            <i class="fa-solid fa-exclamation-triangle"></i>
            Importante
            <i class="fa-solid fa-exclamation-triangle"></i>
          </h3>
          <p>
            Esse desconto só se aplica pagando até o dia do vencimento. Passando, é o valor do plano cheio + encargos bancários, como juros e multa.
          </p>
        </div>

        <p>Quer mais informações? Nosso whatsapp está sempre disponível!</p>
        <Button
          url='https://wa.me/83998644279'
          buttonCName='button service'
          buttonText='Fale Conosco'
          buttonIcon='fa-brands fa-whatsapp'
        />
      </div>

      <Footer />
    </div>
  );
}

export default Service;
