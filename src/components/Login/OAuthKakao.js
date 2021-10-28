import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import API from '../../config';

function OAuthKakao() {
  const location = useLocation();

  const kakaoCode = location.search.split('=')[1];
  const KAKAO_TOKEN_URL = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&code=${kakaoCode}`;

  useEffect(() => {
    fetch(KAKAO_TOKEN_URL)
      .then(result => result.json())
      .then(data => {
        fetch(`${API.users}/kakao`, {
          headers: {
            Authorization: data.access_token,
          },
        })
          .then(result => result.json())
          .then(data => {
            window.localStorage.setItem('accessToken', data.access_token);
            if (data.message === 'SUCCESS') {
              window.opener.location.href = '/';
              window.self.close();
            } else if (data.message === 'NOT_ENOUGH_INFORMATION') {
              window.opener.location.href = '/specialty';
              window.self.close();
            }
          });
      });
  }, [KAKAO_TOKEN_URL]);

  return <div />;
}
export default OAuthKakao;
