import React from 'react';
import SideContent from './SideContent/SideContent';
import MainContent from './MainContent/MainContent';
import './MyPage.scss';

const MyPage = () => {
  return (
    <div className="MyPage">
      <h1 className="myPageHeader">MY 원티드</h1>
      <div className="myPageContent">
        <SideContent />
        <MainContent />
      </div>
    </div>
  );
};

export default MyPage;
