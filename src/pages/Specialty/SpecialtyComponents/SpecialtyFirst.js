import React from 'react';

function SpecialtyFirst({
  userData,
  inputData,
  jobList,
  setPageNumber,
  pageNumber,
}) {
  const { occupational, job, career } = userData;
  let btnStatus = Boolean(occupational && job && career);

  return (
    <div className="mainContents">
      <div className="mainText">
        아래 정보를 입력하면, <br />
        누구누구님에게 찰떡궁합 회사를 매칭해드려요!
      </div>
      <div className="occupationalGroup">
        <label className="occupationalSelector">
          직군
          <select
            className={`${Boolean(occupational) ? '' : 'inactiveSelect'} `}
            value={userData.occupational}
            name="occupational"
            onChange={inputData}
          >
            <option value="" disabled hidden>
              선택해 주세요.
            </option>
            {jobList.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
          <i className="fas fa-sort-down" />
        </label>
      </div>
      {userData.occupational && (
        <div className="jobGroup">
          <label className="jobSelector">
            직무
            <select
              className={`${Boolean(job) ? '' : 'inactiveSelect'} `}
              value={userData.job}
              name="job"
              onChange={inputData}
            >
              <option value="" disabled hidden>
                선택해 주세요.
              </option>
              {jobList[userData.occupational - 1]?.job_list.map(
                ({ id, name }) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                )
              )}
            </select>
            <i className="fas fa-sort-down" />
          </label>
        </div>
      )}
      <div className="careerGroup">
        <label className="careerSelector">
          경력
          <select
            className={`${Boolean(career) ? '' : 'inactiveSelect'}`}
            value={userData.career}
            name="career"
            onChange={inputData}
          >
            <option value="" disabled hidden>
              선택해 주세요.
            </option>
            {CAREER_DATA.map(({ id, value, name }) => (
              <option key={id} value={value}>
                {name}
              </option>
            ))}
          </select>
          <i className="fas fa-sort-down" />
        </label>
      </div>
      <div className="nextBtnWrap">
        <button
          className={`nextBtn ${btnStatus ? '' : 'inactiveBtn'}`}
          disabled={!btnStatus}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          다음
        </button>
      </div>
      <div className="separator">or</div>
      <div className="resumeUploadBtnWrap">
        <button className="resumeUploadBtn">내 이력서 업로드하기</button>
      </div>
    </div>
  );
}

const CAREER_DATA = [
  { id: 0, value: '0', name: '신입' },
  { id: 1, value: '1', name: '1년' },
  { id: 2, value: '2', name: '2년' },
  { id: 3, value: '3', name: '3년' },
  { id: 4, value: '4', name: '4년' },
  { id: 5, value: '5', name: '5년' },
  { id: 6, value: '6', name: '6년' },
  { id: 7, value: '7', name: '7년' },
  { id: 8, value: '8', name: '8년' },
  { id: 9, value: '9', name: '9년' },
  { id: 10, value: '10', name: '10년' },
];

export default SpecialtyFirst;
