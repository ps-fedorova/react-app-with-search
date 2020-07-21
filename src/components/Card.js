import React from 'react'
import './Card.css'

function Card({src, alt, title, subtitle, likes, handleClick}) {
    return (
        <div className="Card">
            <img className="Card_img" src={src} alt={alt} onClick={handleClick}/>
            <div className="Card_description">
                <p className="Card_title">{title}
                <span className="Card_likes">  {likes} ♥</span>
                </p>
                <p className="Card_subtitle" title={subtitle}>{subtitle}</p>
            </div>
        </div>
    )
}

export default Card
