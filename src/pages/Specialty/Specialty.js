import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SpecialtyFirst from './SpecialtyComponents/SpecialtyFirst';
import SpecialtySecond from './SpecialtyComponents/SpecialitySecond';
import './Specialty.scss';

function Specialty() {
  const history = useHistory();

  const [userData, setUserData] = useState({
    occupational: '',
    job: '',
    career: '',
    workplace: '',
    salary: 0,
  });

  const [pageNumber, setPageNumber] = useState(1);
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    fetch('http://10.58.0.118:8000/posts')
      .then(result => result.json())
      .then(data => setJobList(data.category_list));
  }, []);

  const sendData = () => {
    fetch('http://10.58.0.118:8000/users', {
      method: 'PUT',
      header: {
        accessToken: window.localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        job_group: Number(userData.occupational),
        job: Number(userData.job),
        working_year: Number(userData.career),
        salary: userData.salary,
      }),
    }).then(result => {
      if (result === 'success') {
        history.push('/');
      } else {
        alert('error!');
      }
    });
  };

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
            />
          )}
          {pageNumber === 2 && (
            <SpecialtySecond
              userData={userData}
              inputData={inputData}
              sendData={sendData}
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
