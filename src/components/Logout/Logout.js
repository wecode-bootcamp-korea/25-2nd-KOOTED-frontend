import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import './Logout.scss';

function Logout({ history, toggleLogoutModal, logoutModalStatus }) {
  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px; overflow-y: scroll; width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const logout = () => {
    window.localStorage.removeItem('accessToken');
    alert('로그아웃 되었연욱 - 쿠본욱');

    window.location.replace('/');
  };

  useEffect(() => {}, []);

  return (
    <div className="LogoutModalWrap">
      <div className="background" onClick={toggleLogoutModal} />
      <div className="modalItems" style={{ textAlign: 'right' }}>
        <div className="modalHeader">
          <h1 className="kootedLogo">kooted</h1>
          <button>
            <i className="fas fa-times" onClick={toggleLogoutModal} />
          </button>
        </div>
        <div className="logoutModalContent">
          <div className="modalText">
            <h1>진짜 떠나 실 래영?</h1>
          </div>
          <div className="logoutWrapper">
            <div className="logouts">
              <button className="logoutBtn" onClick={logout}>
                네
              </button>
              <button className="logoutBtn" onClick={toggleLogoutModal}>
                안이오
              </button>
            </div>
          </div>
        </div>

        <img
          alt="lang"
          src="./images/lang.png"
          style={{
            display: 'inline',
            width: '30px',
            height: '30px',
            opacity: '0.3',
          }}
        />
      </div>
    </div>
  );
}

export default withRouter(Logout);
