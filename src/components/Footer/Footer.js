import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <div className="footerMenu">
          <img src="images/favicon.ico" alt="logo" />
          <span className="logo">kooted</span>
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
            (주)쿠티드랩 (대표이사:쿠본욱) | 서울특별시 강남구 테헤란로 427
            위워크타워 10층 | 통신판매번호 : 2021-서울강남-7580
            <br />
            유료직업소개사업등록번호 : (국내) 제2021-3232209-11-6-00036호 |
            (국외) 서울동부-유-2021-9 | 사업자등록번호 : 300-82-00832 |
            02-589-0689
            <br />© Kootedlab, Inc.
          </p>
          <select
            className="transferLanguage"
            name="language"
            defaultValue="default"
          >
            <option value="korean">한국 (한국어)</option>
            <option value="japanese">日本 (日本語)</option>
            <option value="chinese">臺灣 (中文)</option>
          </select>
        </div>
      </footer>
    );
  }
}

export default Footer;
