import React, { useState, useEffect } from 'react';
import BookMarkItem from './BookMarkItem/BookMarkItem';
import './BookMark.scss';

const BookMark = () => {
  const [bookMarkList, setBookMarkList] = useState([]);

  useEffect(() => {
    fetch('/data/BookMark/bookmarkData.json')
      .then(res => res.json())
      .then(data => setBookMarkList(data));
  }, []);

  return (
    <section className="BookMark">
      <h1 className="bookMarkTitle">
        북마크
        <span className="btnShowAll">
          총 14개 전체보기 <i className="fas fa-angle-right" />
        </span>
      </h1>
      <ul className="bookMarkList">
        {bookMarkList.map(({ id, image, title, company, location }) => {
          return (
            <BookMarkItem
              key={id}
              image={image}
              title={title}
              company={company}
              location={location}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default BookMark;
