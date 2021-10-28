import React, { useEffect, useState } from 'react';
import ResumeCheckBox from './ResumeCheckBox';
import API, { TOKEN } from '../../../config';
import './ResumeItemList.scss';

function ResumeList({ handleCheck, getResumeId }) {
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    fetch(API.getUserInfo, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then(res => res.json())
      .then(data => {
        setResumeList(data.result);
      });
  }, []);

  return (
    <ul className="ResumeItemList">
      {resumeList?.map(({ id, title, date, status }) => {
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
