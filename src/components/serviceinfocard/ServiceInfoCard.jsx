import React from 'react';
import './ServiceInfoCardStyles.css';

const ServiceInfoCard = (props) => {
  const middleIndex = Math.ceil(props.services.length / 2);
  const leftServices = props.services.slice(0, middleIndex);
  const rightServices = props.services.slice(middleIndex);

  return (
    <div className={`service-info-card ${props.cName}`}>
      <i className={props.iconClass}></i>
      <h3>{props.title}</h3>
      <div className="service-columns">
        <ul>
          {leftServices.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        <ul>
          {rightServices.map((service, index) => (
            <li key={index + middleIndex}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceInfoCard;
