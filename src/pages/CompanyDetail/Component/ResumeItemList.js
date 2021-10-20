import React, { useEffect, useState } from 'react';
import ResumeCheckBox from './ResumeCheckBox';
import './ResumeItemList.scss';

function ResumeList({ handleCheck, getResumeId }) {
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    fetch('./data/ResumeList/resumeData.json')
      .then(res => res.json())
      .then(res => {
        setResumeList(res.RESULT);
      });
  }, []);

  return (
    <ul className="ResumeItemList">
      {resumeList.map(({ id, title, date, status }) => {
        return (
          <ResumeCheckBox
            key={id}
            id={id}
            title={title}
            date={date}
            status={status}
            getResumeId={getResumeId}
          />
        );
      })}
    </ul>
  );
}

export default ResumeList;
