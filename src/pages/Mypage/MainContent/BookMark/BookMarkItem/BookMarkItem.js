import React from 'react';
import { Link } from 'react-router-dom';
import './BookMarkItem.scss';

const BookMarkItem = ({ id, image, title, company, location }) => {
  return (
    <Link to={`/wd-detail/${id}`}>
      <li className="BookMarkItem">
        <img className="thumbnail" src={image} alt="bookMarkImage" />
        <div className="info">
          <h3 className="title">{title}</h3>
          <h4 className="company">{company}</h4>
          <h5 className="location">{location}</h5>
        </div>
      </li>
    </Link>
  );
};

export default BookMarkItem;
