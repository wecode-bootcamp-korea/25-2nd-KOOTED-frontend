import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo/UserInfo';
import './SideContent.scss';

const SideContent = () => {
  const [userInfo, setUserInfo] = useState([]);
  const { image, name, email, phone } = userInfo;

  useEffect(() => {
    fetch('/data/MyPage/userData.json')
      .then(res => res.json())
      .then(info => setUserInfo(info[0]));
  }, []);

  return (
    <section className="SideContent">
      <UserInfo image={image} name={name} email={email} phone={phone} />
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
