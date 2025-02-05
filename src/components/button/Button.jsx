import React from 'react'

import './ButtonStyles.css'
import { Link } from 'react-router-dom'

const handleScrollToTop = () => {
    window.scrollTo(0, 0);
};

const Button = (props) => {
    return props.to ? (
        <Link to={props.to} className={props.buttonCName} onClick={handleScrollToTop}>
            <span>{props.buttonText}</span>
            <i className={props.buttonIcon}></i>
        </Link>
    ) : (
        <a href={props.url} className={props.buttonCName}>
            <span>{props.buttonText}</span>
            <i className={props.buttonIcon}></i>
        </a>
    )
}

export default Button