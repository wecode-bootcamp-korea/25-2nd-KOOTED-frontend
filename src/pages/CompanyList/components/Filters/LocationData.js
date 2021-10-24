import React from 'react';

const LocationData = ({ seoul, ClickLocationBtn }) => {
  return (
    <li className="LocationBtns">
      <button
        className={`${seoul.isChecked ? 'LocationBtnsClicked' : 'LocationBtn'}`}
        onClick={() => ClickLocationBtn(seoul.id)}
      >
        {seoul.location}
      </button>
    </li>
  );
};

export default LocationData;
