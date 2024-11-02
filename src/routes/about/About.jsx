import React from 'react';
import './AboutStyles.css';
import Hero from '../../components/hero/Hero';
import InfoContainer from '../../components/containers/info/InfoContainer';
import Footer from '../../components/footer/Footer';

// Importando o JSON
import aboutData from './aboutData.json';

// Importando imagens
import aboutImg from '../../assets/imgs/3.jpg';
import infoImg1 from '../../assets/imgs/1.jpg';
import infoImg2 from '../../assets/imgs/2.jpg';
import infoImg6 from '../../assets/imgs/6.jpg';
import infoImg8 from '../../assets/imgs/8.jpg';
import infoImg9 from '../../assets/imgs/9.jpg';
import infoImg10 from '../../assets/imgs/10.jpg';

const About = () => {

  const teamImages = [infoImg6, infoImg8, infoImg9, infoImg10];
  const teamCardColor = ['primary', 'secondary', 'tertiary', 'quaternary'];

  return (
    <div>
      <Hero
        cName={aboutData.Hero.cName}
        heroImg={aboutImg}
        title={aboutData.Hero.title}
      />

      <div className='about-container'>
        {aboutData.aboutContainer.map((section, index) => (
          <InfoContainer
            key={index}
            sessionTitle={section.sessionTitle}
            sessionText={section.sessionText}
            cName={section.cName}
            textTitle={section.textTitle}
            textContent={section.textContent}
            img1={section.img1 === "infoImg1" ? infoImg1 : infoImg2}
            img2={section.img2 === "infoImg2" ? infoImg2 : undefined}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default About;
