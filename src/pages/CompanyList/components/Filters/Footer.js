import React from 'react';
import API from '../../../../config';
import './Footer.scss';

export default function Footer({ filterTag, getFilterTagResult, setBtnClick }) {
  const handleBtnClick = () => {
    let idList = '';
    filterTag.forEach(tag => (idList += tag.id + 1 + ' '));
    idList.slice(0, idList.length - 1);

    fetch(`${API.recruitInfo}?tag=${idList}`)
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
