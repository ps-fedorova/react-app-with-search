import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css';

function Card({src, alt, title, subtitle, likes, id}) {
  return (
    <Link className="Card" to={`/photos/${id}`}>
      <img className="Card_img" src={src} alt={alt}/>
      <div className="Card_description">
        <p className="Card_title">{title}
          <span className="Card_likes">  {likes} ♥</span>
        </p>
        <p className="Card_subtitle" title={subtitle}>{subtitle}</p>
      </div>
    </Link>
  )
}

export default Card
