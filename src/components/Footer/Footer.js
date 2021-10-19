import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <div className="footerMenu">
          <img src="images/favicon.ico" alt="logo" />
          <span className="logo">wanted</span>
          <div className="footerMenuBar">
            <a className="footerMenuItem" href="/">
              기업소개
            </a>
            <a className="footerMenuItem" href="/">
              이용약관
            </a>
            <a className="footerMenuItem" href="/">
              개인정보 처리방침
            </a>
            <a className="footerMenuItem" href="/">
              고객센터
            </a>
          </div>
          <div className="footerMenuIcons">
            <i className="fab fa-instagram" />
            <i className="fab fa-youtube" />
            <i className="fab fa-facebook" />
            <i className="fab fa-blogger" />
            <i className="fas fa-comment" />
            <i className="fab fa-apple" />
            <i className="fas fa-map-marker-alt" />
            <i className="fab fa-google-play" />
          </div>
        </div>
        <div className="footerBorder" />
        <div className="footerInfo">
          <p className="footerInfoContent">
            (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300
            롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
            <br />
            유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 |
            (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 |
            02-539-7118
            <br />© Wantedlab, Inc.
          </p>
          <select className="transferLanguage" name="language">
            <option value="korean" selected>
              한국 (한국어)
            </option>
            <option value="japanese">日本 (日本語)</option>
            <option value="chinese">臺灣 (中文)</option>
          </select>
        </div>
      </footer>
    );
  }
}

export default Footer;
