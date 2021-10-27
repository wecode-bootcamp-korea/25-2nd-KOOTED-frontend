import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Login.scss';

function Login({ clickLoginBtn }) {
  const KAKAO_CODE_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}`;

  const loginKakao = () => {
    window.open(KAKAO_CODE_URL);
  };

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px; overflow-y: scroll; width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <div className="LoginModalWrap">
      <div className="background" onClick={clickLoginBtn} />
      <div className="modalItems">
        <div className="modalHeader">
          <h1 className="kootedLogo">kooted</h1>
          <button onClick={clickLoginBtn}>
            <i className="fas fa-times" />
          </button>
        </div>
        <div className="loginModalContent">
          <div className="modalText">
            <h1>
              직장인을 위한
              <br />
              커리어 플랫폼, 쿠티드!
            </h1>
            <h2>
              커리어 성장과 행복을 위한 여정
              <br />
              지금 쿠티드에서 시작하세요.
            </h2>
          </div>
          <div className="loginWrapper">
            <div className="emailInput">
              <label className="inputLabel">
                이메일
                <input
                  className="loginInput email"
                  name="email"
                  type="email"
                  placeholder="이메일을 입력해 주세요."
                />
              </label>
              <div className="errorMessage" style={{ display: 'none' }}>
                올바른 이메일 형식을 입력해주세요.
              </div>
            </div>
            <div className="logins">
              <button className="loginEmail">
                <i className="far fa-envelope" />
                이메일로 계속하기
              </button>
              <div className="separator">or</div>

              <button className="kakaoLogin" onClick={loginKakao}>
                <img
                  alt="kakao-logo"
                  src="images/Login/kakao_login_large_narrow.png"
                />
              </button>
            </div>
            <p className="loginFooter">
              걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.
              <br />
              회원가입 시 <Link to="#">개인정보 처리방침</Link>과{' '}
              <Link to="#">이용약관</Link>을 확인하였으며, 동의합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
