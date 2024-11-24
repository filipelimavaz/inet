import React from 'react';
import './PlanCardStyles.css';

import { Link } from 'react-router-dom';

const PlanCard = (props) => {
  return (
    <div className={`plan-card ${props.cName}`}>
      <h3>{props.title}</h3>
      <h5>{props.price}</h5>
      <span></span>
      <h6>{props.info}</h6>
      <span></span>
      <h5>{props.discount}</h5>
      <Link to={props.url} className="saiba-mais-link">Saiba Mais</Link>
    </div>
  );
};

export default PlanCard;
