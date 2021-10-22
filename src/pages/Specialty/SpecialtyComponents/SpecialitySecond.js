import React from 'react';

function SpecialtySecond({ userData, inputData, sendData }) {
  const { workplace, salary } = userData;
  let btnStatus = Boolean(workplace && salary && !isNaN(salary));

  return (
    <div className="mainContents">
      <div className="mainText">
        인사담당자에게 제안받고 싶다면, <br />
        아래 정보를 추가해주세요!!
      </div>
      <div className="workplaceInputWrap">
        <label className="inputLabel">
          직장
          <input
            name="workplace"
            className="input workplace"
            placeholder="직장명을 입력해 주세요."
            onChange={inputData}
          />
        </label>
      </div>
      <div className="salaryInputWrap">
        <label className="inputLabel">
          연봉
          <input
            name="salary"
            className="input salary"
            placeholder="연봉을 입력해 주세요. (만원)"
            onKeyUp={e =>
              (e.target.value = e.target.value.replace(/[^0-9]/g, ''))
            }
            onChange={inputData}
          />
        </label>
      </div>
      <div className="nextBtnWrap">
        <button
          className={`nextBtn ${btnStatus ? '' : 'inactiveBtn'}`}
          disabled={!btnStatus}
          onClick={sendData}
        >
          쿠티드 시작하기
        </button>
      </div>
    </div>
  );
}

export default SpecialtySecond;
