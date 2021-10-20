import React from 'react';
import ApplyStatus from './ApplyStatus/ApplyStatus';
import BookMark from './BookMark/BookMark';

const MainContent = () => {
  return (
    <div className="MainContent">
      <ApplyStatus />
      <BookMark />
    </div>
  );
};

export default MainContent;
