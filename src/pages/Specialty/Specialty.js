import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SpecialtyFirst from './SpecialtyComponents/SpecialtyFirst';
import SpecialtySecond from './SpecialtyComponents/SpecialitySecond';
import API, { TOKEN } from '../../config';
import './Specialty.scss';

function Specialty() {
  const history = useHistory();

  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState({
    occupational: '',
    job: '',
    career: '',
    workplace: '',
    salary: '',
  });
  const [pageNumber, setPageNumber] = useState(1);
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    fetch(API.users, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then(result => result.json())
      .then(data => setUserName(data.user_info.name));

    fetch(API.recruitInfo)
      .then(result => result.json())
      .then(data => setJobList(data.job_group_list));
  }, []);

  const sendData = () => {
    fetch(API.users, {
      method: 'PUT',
      headers: {
        Authorization: TOKEN,
      },
      body: JSON.stringify({
        job_id: Number(userData.job),
        working_year: Number(userData.career),
        salary: Number(uncomma(userData.salary)),
      }),
    }).then(result => {
      if (result.status === 200) {
        history.push('/');
      } else {
        alert(result);
      }
    });
  };

  const inputNumberFormat = () => {
    setUserData({ ...userData, salary: comma(uncomma(userData.salary)) });
  };
  function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
  }
  function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
  }

  const inputData = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    if (userData.occupational && name === 'occupational')
      setUserData({ ...userData, occupational: value, job: '' });
  };

  return (
    <div className="InterestSetting">
      <div className="contentsWrap">
        <div className="logo">
          <h1>kooted</h1>
        </div>
        <div className="contentsBox">
          <div className="headerContainer">
            <ul className="contents">
              <li className={`${pageNumber === 1 ? 'active' : 'complete'}`}>
                <em>
                  {pageNumber <= 1 ? '1' : <i className="fas fa-check" />}
                </em>
                <span>{pageNumber === 1 ? '전문분야 설정' : ''}</span>
              </li>
              <li className={`${pageNumber === 2 ? 'active' : 'complete'}`}>
                <em className={`${pageNumber >= 2 ? 'beBlue' : ''}`}>
                  {pageNumber <= 2 ? '2' : <i className="fas fa-check" />}
                </em>
                <span>{pageNumber === 2 ? '직장/연봉 설정' : ''}</span>
              </li>
            </ul>
          </div>
          {pageNumber === 1 && (
            <SpecialtyFirst
              userData={userData}
              inputData={inputData}
              jobList={jobList}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              userName={userName}
            />
          )}
          {pageNumber === 2 && (
            <SpecialtySecond
              userData={userData}
              inputData={inputData}
              sendData={sendData}
              inputNumberFormat={inputNumberFormat}
            />
          )}
        </div>
        <div className="footer">
          <button
            onClick={() => {
              history.push('/');
            }}
          >
            나중에 입력할게요 {'>'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Specialty;
