import React from "react";
import {useParams, Link} from 'react-router-dom';
import './Photo.css';

const Photo = ({photos}) => {

  const {id} = useParams();
  const photo = photos.find(photo => photo.id === id);


  return (
    <div className="Photo">
      {
        photo ?
          <div className='Photo-container'>
            <Link to="/" className="Photo-go-back">Назад</Link>
            <img src={photo.src} alt={photo.alt} className="Photo-image"/>
            <p className="Photo-title">{photo.title}</p>
            <p className="Photo-subtitle">{photo.subtitle}</p>
          </div>

          : <>
            <p className="Photo-note">Фотографий с данным id не найдено</p>
            <Link to="/" className="Photo-go-back">Назад</Link>
          </>
      }

    </div>
  )
}

export default Photo;
