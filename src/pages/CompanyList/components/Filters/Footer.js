import React from 'react';
import API from '../../../../config';
import './Footer.scss';

export default function Footer({ filterTag, getFilterTagResult, setBtnClick }) {
  const handleBtnClick = () => {
    const idList = [];
    filterTag.forEach(tag => idList.push(tag.id));

    fetch(`${API.recruitInfo}?tag=${idList.join('')}`)
      .then(res => res.json())
      .then(res => {
        getFilterTagResult(res.result);
      });

    setBtnClick(false);
  };
  return (
    <div className="modalBodyBtnWrap" onClick={handleBtnClick}>
      <button className="modalBodyBtn">확인</button>
    </div>
  );
}
