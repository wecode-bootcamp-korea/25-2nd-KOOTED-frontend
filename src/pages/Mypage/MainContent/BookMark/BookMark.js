import React, { useState, useEffect } from 'react';
import BookMarkItem from './BookMarkItem/BookMarkItem';
import './BookMark.scss';

const BookMark = () => {
  const [bookMarkList, setBookMarkList] = useState([]);

  useEffect(() => {
    fetch('http://10.58.0.118:8000/posts/bookmark')
      .then(res => res.json())
      .then(data => setBookMarkList(data.bookmark_list));
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
        {bookMarkList?.map(
          ({ id, image_url, title, company_name, location }) => {
            return (
              <BookMarkItem
                key={id}
                image={image_url}
                title={title}
                company={company_name}
                location={location}
              />
            );
          }
        )}
      </ul>
    </section>
  );
};

export default BookMark;
