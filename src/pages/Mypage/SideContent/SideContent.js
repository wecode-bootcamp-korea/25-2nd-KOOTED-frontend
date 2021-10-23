import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo/UserInfo';
import './SideContent.scss';

const SideContent = () => {
  const [userInfo, setUserInfo] = useState([]);
  const { name, email, mobile_number } = userInfo;

  useEffect(() => {
    fetch('http://10.58.0.118:8000/posts/bookmark')
      .then(res => res.json())
      .then(data => setUserInfo(data.user_info));
  }, []);

  return (
    <section className="SideContent">
      <UserInfo name={name} email={email} mobile_number={mobile_number} />
      <ul className="resumeStatusList">
        <li className="status want">
          원해요<span className="count">0</span>
        </li>
        <li className="status read">
          열람<span className="count">2</span>
        </li>
        <li className="status received">
          받은 제안<span className="count">0</span>
        </li>
      </ul>
      <div className="accountSetting">계정 설정</div>
    </section>
  );
};

export default SideContent;
