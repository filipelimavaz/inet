import React from 'react';
import PlanCard from '../plancard/PlanCard';
import './PlanContainerStyles.css';

const PlanContainer = (props) => {

  const plans = props.plans || [];

  return (
    <div className="plan-container">
      <h2>{props.sessionTitle}</h2>
      <p>{props.sessionText}</p>

      <div className="plan-card-container">
        {plans.length > 0 ? (
          plans.slice(0, 6).map((plan, index) => (
            <PlanCard
              key={index}
              title={plan.title}
              price={plan.price}
              info={plan.info}
              discount={plan.discount}
              url={props.url}
            />
          ))
        ) : (
          <p>Nenhum plano disponível no momento.</p>
        )}
      </div>
    </div>
  );
};

export default PlanContainer;
