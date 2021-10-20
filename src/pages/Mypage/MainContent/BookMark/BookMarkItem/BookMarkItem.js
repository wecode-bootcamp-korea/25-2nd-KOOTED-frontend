import React from 'react';
import './BookMarkItem.scss';

const BookMarkItem = ({ image, title, company, location }) => {
  return (
    <li className="BookMarkItem">
      <img className="thumbnail" src={image} alt="bookMarkImage" />
      <div className="info">
        <h3 className="title">{title}</h3>
        <h4 className="company">{company}</h4>
        <h5 className="location">{location}</h5>
      </div>
    </li>
  );
};

export default BookMarkItem;
