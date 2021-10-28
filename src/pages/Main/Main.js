import React from 'react';
import BtnStart from './BtnStart/BtnStart';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <div className="mainStart">
          <h1 className="introMainText">
            직장인의 커리어 여정을 <br />
            행복하게, 쿠티드
          </h1>
          <h5 className="introSubText">
            지금 쿠티드와 커리어 여정을 시작하세요.
          </h5>
          <BtnStart />
        </div>
        <div className="mainMiddle">
          <div className="mainMiddleContent">
            <i className="fas fa-people-carry fa-9x" />
            <div className="contentText">
              더 나은 커리어를 위한
              <br />
              새로운 기회
              <span>
                나에게 딱 맞는 회사를 찾거나
                <br />
                나에게 딱 맞는 회사가 커리어를 제안합니다.
              </span>
            </div>
          </div>
          <div className="mainMiddleContent">
            <i className="fas fa-seedling fa-9x" />
            <div className="contentText">
              실력있는 사람들과
              <br />
              함께하는 성장
              <span>
                강연&믿업에서 이야기를 듣고 공유하며
                <br />
                함께 성장하는 기회를 발견합니다.
              </span>
            </div>
          </div>
          <div className="mainMiddleContent">
            <i className="fas fa-glass-cheers fa-9x" />
            <div className="contentText">
              쿠티드와 요즘 직장인이
              <br />
              만드는 행복
              <span>
                직장인 행복을 위한 다양한 이벤트에 참여하고,
                <br />
                일상 속 여유를 즐기기도 합니다.
              </span>
            </div>
          </div>
        </div>
        <div className="mainEnd">
          <div className="contentText mainEndText">
            커리어 성장과 행복을 위한 여정,
            <br />
            지금 쿠티드에서 시작하세요.
            <span>
              200만 직장인과 10,000개 기업이
              <br />
              쿠티드와 커리어 여정을 함께합니다.
            </span>
            <BtnStart />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
