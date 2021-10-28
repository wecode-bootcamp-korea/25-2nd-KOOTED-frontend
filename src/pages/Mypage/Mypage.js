import React, { useState } from 'react';
import SideContent from './SideContent/SideContent';
import MainContent from './MainContent/MainContent';
import './MyPage.scss';

const MyPage = () => {
  const [logoutModalStatus, setLogoutModalStatus] = useState(false);

  const toggleLogoutModal = () => {
    setLogoutModalStatus(!logoutModalStatus);
  };
  return (
    <div className="MyPage">
      <h1 className="myPageHeader">MY 원티드</h1>
      <div className="myPageContent">
        <SideContent
          logoutModalStatus={logoutModalStatus}
          toggleLogoutModal={toggleLogoutModal}
        />
        <MainContent />
      </div>
    </div>
  );
};

export default MyPage;
