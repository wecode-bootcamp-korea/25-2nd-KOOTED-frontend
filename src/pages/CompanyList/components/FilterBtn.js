import React, { useState } from 'react';
import Header from './Filters/Header';
import BodyTags from './Filters/BodyTags';
import BodyLocation from './Filters/BodyLocation';
import BodyCareer from './Filters/BodyCareer';
import './FilterBtn.scss';

export default function FilterBtn({ btnName, btnTextFind, btnText }) {
  const [btnClick, setBtnClick] = useState(false);

  const isClickFilterBtn = () => {
    setBtnClick(!btnClick);
  };

  return (
    <>
      <button className="filterBtn" onClick={isClickFilterBtn}>
        <span className="btnName">{btnName}</span>
        <span className="btnTextFind">{btnTextFind}</span>
        <span className="btnText">{btnText}</span>
        <img className="drop" alt="drop" src="/images/companyList/hwasal.png" />
      </button>
      <div className={btnClick ? 'ModalPopupWrapON' : 'ModalPopupWrapOFF'}>
        <Header
          btnName={btnName}
          btnClick={btnClick}
          isClickFilterBtn={isClickFilterBtn}
        >
          <div className="ModalBody">
            {btnName === '태그' && <BodyTags />}
            {btnName === '지역' && <BodyLocation />}
            {btnName === '경력' && <BodyCareer />}
          </div>
        </Header>
      </div>
    </>
  );
}
