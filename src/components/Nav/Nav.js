import React from 'react';
import { Link } from 'react-router-dom';
import SubMenu from './SubMenu/SubMenu';
import './Nav.scss';

class Nav extends React.Component {
  state = {
    isMenuVisible: false,
  };

  handleMouseOver = () => {
    this.setState({
      isMenuVisible: true,
    });
  };

  handleMouseOut = () => {
    this.setState({
      isMenuVisible: false,
    });
  };

  render() {
    const TOKEN = localStorage.getItem('token');
    const { isMenuVisible } = this.state;

    return (
      <div className="Nav">
        <Link className="goMain" to="/">
          <h3 className="navLogo">KOOTED</h3>
        </Link>
        <ul className="navMenuBar">
          <li
            className="menuItem explore"
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
          >
            <Link to="/wd-list">탐색</Link>
          </li>
          <li className="menuItem explore">
            <Link to="/">커리어 성장</Link>
          </li>
          <li className="menuItem explore">
            <Link to="/">직군별 연봉</Link>
          </li>
          <li className="menuItem explore">
            <Link to="/wd-resume-list">이력서</Link>
          </li>
          <li className="menuItem explore">
            <Link to="/">매치업</Link>
          </li>
          <li className="menuItem explore">
            <Link to="/">프리랜서</Link>
          </li>
          <li className="menuItem explore">
            <Link to="/">AI 합격예측</Link>
          </li>
        </ul>
        <i className="fas fa-search btnSearch" />
        {TOKEN ? (
          <Link to="/wd-mypage">
            <img
              className="profileImage"
              src="/images/MyPage/profile.png"
              alt="userImage"
            />
          </Link>
        ) : (
          <button className="btnSignUp">회원가입/로그인</button>
        )}

        <SubMenu isMenuVisible={isMenuVisible} />
      </div>
    );
  }
}

export default Nav;
