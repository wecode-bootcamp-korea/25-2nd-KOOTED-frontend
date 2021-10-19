import React from 'react';
import './ResumeItem.scss';

class ResumeItem extends React.Component {
  render() {
    return (
      <div className="ResumeItem">
        <div className="itemTop">
          <h3 className="itemTitle">정민지</h3>
          <h5 className="itemDate">2021. 10. 19</h5>
        </div>
        <div className="itemBottom">
          <h5 className="itemState">
            <span className="itemFile">한</span>작성 완료
          </h5>
          <i className="fas fa-ellipsis-v" />
        </div>
      </div>
    );
  }
}

export default ResumeItem;
