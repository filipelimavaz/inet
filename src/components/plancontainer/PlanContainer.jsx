import React from 'react';
import PlanCard from '../plancard/PlanCard';
import './PlanContainerStyles.css';

import data from '../../assets/data/plansData.json'

const PlanContainer = (props) => {
  return (
    <div className='plan-container'>
      <h2>{props.sessionTitle}</h2>
      <p>{props.sessionText}</p>

      <div className='plan-card-container'>
        {data.slice(0, 6).map((plan, index) => (
          <PlanCard
            key={index}
            title={plan.title}
            details={plan.details}
            url={props.url}
          />
        ))}
      </div>
    </div>
  );
}

export default PlanContainer;
