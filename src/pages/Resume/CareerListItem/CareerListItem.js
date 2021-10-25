import React, { useState } from 'react';
import './CareerListItem.scss';

const CareerListItem = ({
  listId,
  startYear,
  startMonth,
  endYear,
  endMonth,
  inOffice,
  companyName,
  duty,
  getIsChecked,
  handleOnChange,
  handleRemoveItem,
}) => {
  const [isChecked, setIsChecked] = useState(inOffice);

  const handleIsChecked = () => {
    // 서버에서 받아온 재직 중 값
    setIsChecked(isChecked === 0 ? 0 : 1);

    // Resume 컴포넌트에 isChecked 여부 넘겨줄 때 사용
    getIsChecked(isChecked);
  };
  return (
    <li className="CareerListItem">
      <div className="itemHeader">
        <div className="headerColumn">
          <input
            className="workedDate year"
            name="startYear"
            type="number"
            placeholder="YYYY"
            value={startYear}
            onChange={handleOnChange}
          />
          <span className="dot">.</span>
          <input
            className="workedDate month"
            name="startMonth"
            type="number"
            placeholder="MM"
            value={startMonth}
            onChange={handleOnChange}
          />
          <span className="dash">-</span>
          <input
            className="workedDate year"
            name="endYear"
            type="number"
            placeholder="YYYY"
            value={endYear}
            onChange={handleOnChange}
          />
          <span className="dot">.</span>
          <input
            className="workedDate month"
            name="endMonth"
            type="number"
            placeholder="MM"
            value={endMonth}
            onChange={handleOnChange}
          />
        </div>
        <div className="headerColumn">
          <input
            className="inOffice"
            type="checkbox"
            name="inOffice"
            checked={isChecked === 1 ? true : false}
            onChange={handleIsChecked}
          />
          <label htmlFor="inOffice">현재 재직중</label>
        </div>
      </div>
      <div className="itemContent">
        <input
          className="companyName"
          name="companyName"
          type="text"
          placeholder="회사명"
          onChange={handleOnChange}
          value={companyName}
        />
        <input
          className="department"
          name="duty"
          type="text"
          placeholder="부서명/직책"
          onChange={handleOnChange}
          value={duty}
        />
      </div>
      <button
        className="btnDeleteItem"
        onClick={() => handleRemoveItem(listId)}
      >
        <i className="fas fa-plus" />
      </button>
    </li>
  );
};

export default CareerListItem;
