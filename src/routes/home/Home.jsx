import React from 'react';
import InfoContainer from '../../components/containers/info/InfoContainer';
import CardContainer from '../../components/containers/card/CardContainer';
import Carousel from '../../components/carousel/Carousel';
import PortfolioContainer from '../../components/containers/portfolio/PortfolioContainer';
import Footer from '../../components/footer/Footer';
import PlanContainer from '../../components/plancontainer/PlanContainer';
import PortfolioButtons from '../../components/portfolioButtons/PortfolioButtons';

import './HomeStyles.css';

import infoImg1 from '../../assets/imgs/2.jpg';
import infoImg2 from '../../assets/imgs/3.jpg';
import infoImg3 from '../../assets/imgs/1.jpg';
import infoImg4 from '../../assets/imgs/4.jpg';
import infoImg5 from '../../assets/imgs/5.jpg';
import infoImg6 from '../../assets/imgs/6.jpg';
import infoImg10 from '../../assets/imgs/10.jpg';
import infoImg8 from '../../assets/imgs/8.jpg';
import infoImg9 from '../../assets/imgs/9.jpg';

const Home = () => {
  const sliderImages = [infoImg1, infoImg2, infoImg3];
  const photographImages = [
    infoImg1,
    infoImg2,
    infoImg3,
    infoImg4,
    infoImg5,
    infoImg6,
    infoImg10,
    infoImg8,
    infoImg9,
    infoImg1,
    infoImg2,
    infoImg3,
  ];
  const graphicDesignImages = [
    infoImg5,
    infoImg4,
    infoImg2,
    infoImg3,
    infoImg8,
    infoImg1,
    infoImg10,
    infoImg9,
    infoImg5,
    infoImg3,
    infoImg1,
    infoImg2,
  ];

  return (
    <div>
      <Carousel images={sliderImages} title={'Uma ideia'}></Carousel>

      <CardContainer />

      <PlanContainer
        sessionTitle="Nossos Planos"
        sessionText="Oferecemos os melhores planos para com a necessidade do cliente"
      />

      <InfoContainer
        sessionTitle="Institucional"
        sessionText="Tudo que você espera de um provedor de internet"
        cName="info-content"
        textTitle="iNet Telecomunicações"
        textContent="A iNet Telecomunicações é um provedor destaque no cenário de Gramame e Região, sempre oferecendo Qualidade e Alta Performace!"
        textContent2="Nós garantimos um serviço de suporte ao cliente de alta qualidade com conexão via fibra optica de alta velocidade ligada a todo o mundo."
        img1={infoImg1}
        img2={infoImg2}
        buttonText="Institucional"
        buttonIcon="fa-solid fa-arrow-pointer"
      />

      <PortfolioButtons />

      <Footer />
    </div>
  );
};

export default Home;
