import React, { useState } from 'react';

function ResumeItem({ id, title, date, status, getIsChecked, getResumeId }) {
  const [isCheck, setIsCheck] = useState(false);
  const handleCheck = () => {
    setIsCheck(!isCheck);
  };

  return (
    <li className={isCheck ? 'resumeItem' : 'failresumeItem'}>
      <input
        type="checkbox"
        className="selectResume"
        value={isCheck}
        onChange={handleCheck}
        onClick={() => getResumeId(id)}
      />
      <div className="resumeContent">
        <span className="userName">{title}</span>
        <div className="resumeSubContent">
          <span className="resumeState">한국어</span>
          <span className="resumeState">{date}</span>
          <span className="resumeState">{status}</span>
        </div>
      </div>
      <i className="fas fa-chevron-right" />
    </li>
  );
}

export default ResumeItem;
