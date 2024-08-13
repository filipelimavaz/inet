import React from 'react';
import Button from '../button/Button';
import './PortfolioButtonsStyles.css';

const PortfolioButtons = () => {
    return (
        <div className='portfolio-buttons'>
            <h2>Redes Sociais</h2>
            <p>Confira nossas redes sociais. Entre em contato conosco!</p>
            <div className='buttons-container'>
                <Button
                    url='https://www.instagram.com/inetnordeste/'
                    buttonCName='button info'
                    buttonText='Instagram'
                    buttonIcon='fa-brands fa-instagram'
                />
                <Button
                    url='https://www.facebook.com/inetnordeste'
                    buttonCName='button info'
                    buttonText='Facebook'
                    buttonIcon='fa-brands fa-square-facebook'
                />
                <Button
                    url='https://api.whatsapp.com/message/IM4FGE2PLUHVI1'
                    buttonCName='button info'
                    buttonText='Whatsapp'
                    buttonIcon='fa-brands fa-whatsapp'
                />
            </div>
        </div>
    );
};

export default PortfolioButtons;
