import React, { useState, useEffect } from 'react';
import BookMarkItem from './BookMarkItem/BookMarkItem';
import API, { TOKEN } from '../../../../config';
import './BookMark.scss';

const BookMark = () => {
  const [bookMarkList, setBookMarkList] = useState([]);

  useEffect(() => {
    fetch(API.users, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then(res => res.json())
      .then(data => setBookMarkList(data.user_info.bookmarks));
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
                id={id}
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
