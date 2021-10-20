import React, { useState, useEffect } from 'react';
import './ApplyStatus.scss';

const ApplyStatus = () => {
  const [applyStatus, setApplyStatus] = useState([]);
  const { applied, screeningPassed, recruited, rejected } = applyStatus;

  useEffect(() => {
    fetch('/data/MyPage/applyStatus.json')
      .then(res => res.json())
      .then(data => setApplyStatus(data[0]));
  }, []);

  return (
    <section className="ApplyStatus">
      <h1 className="title">지원 현황</h1>
      <ul className="applyList">
        <li className="item">
          <span className="count">{applied}</span>지원 완료
        </li>
        <li className="item">
          <span className="count">{screeningPassed}</span>서류 통과
        </li>
        <li className="item">
          <span className="count">{recruited}</span>최종 합격
        </li>
        <li className="item">
          <span className="count">{rejected}</span>불합격
        </li>
      </ul>
    </section>
  );
};

export default ApplyStatus;
