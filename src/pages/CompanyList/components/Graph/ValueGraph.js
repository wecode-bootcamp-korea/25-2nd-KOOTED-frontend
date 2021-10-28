import React, { useState, useEffect } from 'react';
import './ValueGraph.scss';

export default function ValueGraph({ careerYears, totalSalary }) {
  const [isVisibleGuide, setIsVisibleGuide] = useState(false);

  const APIdataChangeToHeight = totalSalary => {
    const ALL_GRAPH_WRAP_HEIGHT = 350;
    const MAX_DATA_VALUE = 70000000;

    let heighValue =
      (ALL_GRAPH_WRAP_HEIGHT * parseInt(totalSalary, 10)) / MAX_DATA_VALUE;

    return heighValue;
  };

  const yearTenThousandWon = salarydata => {
    const THOUSAND_DIGIT = 10000;
    const salary = parseInt(salarydata, 10);
    const divisionForYearMoney = Math.floor(salary / THOUSAND_DIGIT);

    return divisionForYearMoney.toLocaleString();
  };

  const handleVisible = () => {
    setIsVisibleGuide(!isVisibleGuide);
  };

  return (
    <div className="ValueGraph">
      <div
        className="graph"
        style={{ height: `${APIdataChangeToHeight(totalSalary)}px` }}
        onMouseOver={handleVisible}
        onMouseOut={handleVisible}
      >
        <div className={`GraphGuide ${isVisibleGuide ? '' : 'deactive'}`}>
          <p className="GuideText">
            {careerYears === 0 ? '신입' : `${careerYears}년`}
          </p>
          <p className="HowMuch">
            {yearTenThousandWon(totalSalary)} <b>만원</b>
          </p>
        </div>
      </div>
      <div className="value">
        {careerYears === 0 ? '신입' : `${careerYears}년`}
      </div>
    </div>
  );
}
