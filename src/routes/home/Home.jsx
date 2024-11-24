import React from 'react';
import InfoContainer from '../../components/containers/info/InfoContainer';
import CardContainer from '../../components/containers/card/CardContainer';
import Carousel from '../../components/carousel/Carousel';
import Footer from '../../components/footer/Footer';
import PlanContainer from '../../components/plancontainer/PlanContainer';
import PortfolioButtons from '../../components/portfolioButtons/PortfolioButtons';

import './HomeStyles.css';
import servicesData from '../service/servicesData.json';

import infoImg1 from '../../assets/imgs/2.jpg';
import infoImg2 from '../../assets/imgs/3.jpg';
import infoImg3 from '../../assets/imgs/1.jpg';

const Home = () => {
  const sliderImages = [infoImg1, infoImg2, infoImg3];

  return (
    <div>
      <Carousel images={sliderImages} title={'Uma ideia'}></Carousel>

      <CardContainer />

      <InfoContainer
        sessionTitle="Institucional"
        sessionText="Tudo que você espera de um provedor de internet"
        cName="info-content"
        textTitle="iNet Telecomunicações"
        textContent="A iNet Telecomunicações é um provedor destaque no cenário de Gramame e Região, sempre oferecendo Qualidade e Alta Performace!"
        textContent2="Nós garantimos um serviço de suporte ao cliente de alta qualidade com conexão via fibra optica de alta velocidade ligada a todo o mundo."
        img1={infoImg1}
        img2={infoImg2}
        buttonCName='button-inst'
        to='/sobre'
        buttonText="Institucional"
        buttonIcon="fa-solid fa-arrow-pointer"
      />

      <PlanContainer
        sessionTitle="Nossos Planos"
        sessionText="Oferecemos os melhores planos para com a necessidade do cliente"
        plans={servicesData.plans}
        url='https://wa.me/83998644279'
      />

      <PortfolioButtons />

      <Footer />
    </div>
  );
};

export default Home;
