import React, { useState, useEffect } from 'react';
import LocationData from './LocationData';
import Footer from './Footer';
import './BodyLocation.scss';

export default function BodyLocation() {
  const [locationData] = useState(SEOUL_LOCATION);
  const [, setChoiceSeoul] = useState(1);
  const [clickValue, setClickValue] = useState(false);
  const [filterLocation, setFilterLocation] = useState([]);

  const ClickLocationBtn = id => {
    setChoiceSeoul(id);
    setClickValue(!clickValue);
    locationData[id].isChecked = !clickValue;
  };

  useEffect(() => {
    setFilterLocation(locationData.filter(seoul => seoul.isChecked === true));
  }, [clickValue, locationData]);

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
              {SEOUL_LOCATION.map(location => {
                return (
                  <LocationData
                    key={location.id}
                    seoul={location}
                    ClickLocationBtn={ClickLocationBtn}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <div className="pickLocationWrap">
          <p className="LocationPickText">선택된 지역</p>
          <ul className="choiceLocationList">
            {filterLocation.map(seoul => (
              <li className="choiceLocations" key={seoul.id}>
                <button className="choiceLocationBtn">{seoul.location}</button>
              </li>
            ))}
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
  { id: 0, location: '전체', isChecked: false },
  { id: 1, location: '강남구', isChecked: false },
  { id: 2, location: '강동구', isChecked: false },
  { id: 3, location: '강북구', isChecked: false },
  { id: 4, location: '강성구', isChecked: false },
  { id: 5, location: '관악구', isChecked: false },
  { id: 6, location: '광진구', isChecked: false },
  { id: 7, location: '구로구', isChecked: false },
  { id: 8, location: '구천구', isChecked: false },
  { id: 9, location: '노원구', isChecked: false },
  { id: 10, location: '은평구', isChecked: false },
];
