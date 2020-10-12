import React from 'react';
import {Link} from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="NotFound">
      <p className="NoteFound-note">
        Страница не найдена
        <Link className="NotFound-link" to="/">
          Домой
        </Link>
      </p>
    </div>
  )
}

export default NotFound;
