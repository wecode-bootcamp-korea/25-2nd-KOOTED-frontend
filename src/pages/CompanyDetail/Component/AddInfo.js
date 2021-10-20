import React from 'react';
import Location from './Location';
import './AddInfo.scss';

export default class Addinfo extends React.Component {
  render() {
    const { deadline } = this.props;

    return (
      <section className="AddInfo">
        <div className="addContent">
          <div className="deadLine">
            <span className="addTitle">마감일</span>
            <span className="addSub">{deadline}</span>
          </div>
          <div className="workArea">
            <span className="addTitle">근무지역</span>
            <span className="addSub">송파구 중대로 109, 11층</span>
          </div>
        </div>
        <Location />
      </section>
    );
  }
}
