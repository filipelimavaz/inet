import React from 'react';
import './PlanCardStyles.css';

const PlanCard = (props) => {
  return (
    <div className={`plan-card ${props.cName}`}>
      <h3>{props.title}</h3>
      {props.details.map((detail, index) => (
        <React.Fragment key={index}>
            <p>{detail}</p>
            <span></span>
        </React.Fragment>
      ))}
      <a href="#" className="saiba-mais-link">Saiba Mais</a> {/* Substitui o botão por um link */}
    </div>
  );
};

export default PlanCard;
