import React from 'react';
import ResumeItem from './ResumeItem/ResumeItem';
import './ResumeList.scss';

class ResumeList extends React.Component {
  render() {
    return (
      <div className="ResumeList">
        <div className="resumeListHeader">
          <h3 className="headerTitle">최근 문서</h3>
        </div>
        <div className="resumeListBody">
          <div className="addResume">
            <i className="far fa-clone" />
            <p className="addResumeText">새 이력서 작성</p>
          </div>
          <ResumeItem />
        </div>
      </div>
    );
  }
}

export default ResumeList;
