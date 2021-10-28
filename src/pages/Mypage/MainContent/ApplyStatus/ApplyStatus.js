import React, { useState, useEffect } from 'react';
import API, { TOKEN } from '../../../../config';
import './ApplyStatus.scss';

const ApplyStatus = () => {
  const [applyStatus, setApplyStatus] = useState([]);

  useEffect(() => {
    fetch(API.users, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then(res => res.json())
      .then(data => setApplyStatus(data.user_info.applications));
  }, []);

  return (
    <section className="ApplyStatus">
      <h1 className="title">지원 현황</h1>
      <ul className="applyList">
        <li className="item">
          <span className="count">{applyStatus}</span>지원 완료
        </li>
        <li className="item">
          <span className="count">4</span>서류 통과
        </li>
        <li className="item">
          <span className="count">2</span>최종 합격
        </li>
        <li className="item">
          <span className="count">0</span>불합격
        </li>
      </ul>
    </section>
  );
};

export default ApplyStatus;
