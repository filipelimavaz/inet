import React from 'react';
import './AboutStyles.css';
import Hero from '../../components/hero/Hero';
import InfoContainer from '../../components/containers/info/InfoContainer';
import Footer from '../../components/footer/Footer';

import aboutData from './aboutData.json';

import aboutImg from '../../assets/imgs/3.jpg';
import infoImg1 from '../../assets/imgs/1.jpg';
import infoImg2 from '../../assets/imgs/2.jpg';

const About = () => {

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
