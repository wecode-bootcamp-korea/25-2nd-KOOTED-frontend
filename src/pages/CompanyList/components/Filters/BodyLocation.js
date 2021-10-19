import React from 'react';
import Footer from './Footer';
import './BodyLocation.scss';

export default function BodyLocation() {
  return (
    <>
      <div className="BodyLocation">
        <div className="choiceLocationWrap">
          <div className="bigLocationLeft">
            <p className="LocationText">지역</p>
            <div className="LocationWrap">서울</div>
          </div>
          <div className="smallLocationRight">
            <p className="LocationText">상세지역</p>
            <ul className="LocationWrap">
              {SEOUL_LOCATION.map(seoul => {
                return (
                  <li className="LocationBtns" key={seoul.id}>
                    <button className="LocationBtn">{seoul.location}</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="pickLocationWrap">
          <p className="LocationPickText">선택된 지역</p>
          <ul className="choiceLocationList">
            <li className="choiceLocations">
              <button className="choiceLocationBtn">강남구</button>
            </li>
            <li className="choiceLocations">
              <button className="choiceLocationBtn">강성구</button>
            </li>
            <li className="choiceLocations">
              <button className="choiceLocationBtn">강북구</button>
            </li>
            <li className="choiceLocations">
              <button className="choiceLocationBtn">광진구</button>
            </li>
          </ul>
          <p className="guideText">
            해당 지역을 모두 만족하는 포지션이 노출됩니다.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

const SEOUL_LOCATION = [
  { id: 1, location: '전체' },
  { id: 2, location: '강남구' },
  { id: 3, location: '강동구' },
  { id: 4, location: '강북구' },
  { id: 5, location: '강성구' },
  { id: 6, location: '관악구' },
  { id: 7, location: '광진구' },
  { id: 8, location: '구로구' },
  { id: 9, location: '구천구' },
  { id: 10, location: '노원구' },
];
