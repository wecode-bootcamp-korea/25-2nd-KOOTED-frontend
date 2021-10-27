import React, { useState, useEffect } from 'react';
import './ApplyStatus.scss';

const API = localStorage.getItem('token');

const ApplyStatus = () => {
  const [applyStatus, setApplyStatus] = useState([]);

  useEffect(() => {
    fetch('http://10.58.0.243:8000/users', {
      headers: {
        Authorization: API,
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
          <span className="count">2</span>불합격
        </li>
      </ul>
    </section>
  );
};

export default ApplyStatus;
