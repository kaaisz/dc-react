import React from 'react'
import './Card.css';

// create empty components
const Card = props => (
    <div className="Card">
        {/* to override data later. data is inherited from props */}
        <img className="Card__img" src={props.image} alt="" srcset=""/>
        <h3 className="Card__title">{props.title}</h3>
        <p className="Card__text">{props.text}</p>
    </div>
)

export default Card;