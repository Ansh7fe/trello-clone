import React from 'react';
import "./cards.css";
import {Link} from "react-router-dom";
const Cards = ({image,title,desc,link,button}) => {
    return (
        <div className="cards">
            <div className="cards_left">
                <img src={image} alt="logo"/>
            </div>
            <div className="cards_right">
                <p className="cards_title">{title}</p>
                <p className="desc">{desc}</p>

                <Link to="/">{button}</Link>
            </div>
        </div>
    )
}

export default Cards
