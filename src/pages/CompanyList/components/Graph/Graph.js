import React, { useState, useEffect } from 'react';
import ValueNum from './ValueNum';
import ValueLine from './ValueLine';
import ValueGraph from './ValueGraph';
import API from '../../../../config';
import './Graph.scss';

export default function Graph({ salaryList }) {
  const [salaryData, setSalaryData] = useState([]);

  useEffect(() => {
    setSalaryData(salaryList);
    valueToAVG(salaryData);
  }, [salaryData, salaryList]);

  const valueToAVG = salaryData => {
    let floatToIntArr = salaryData.map(data =>
      Number(data.total_salary.split('.')[0])
    );
    let sum = floatToIntArr.reduce((prev, curr) => prev + curr, 0);
    let avgSum = Math.floor(sum / 110000).toLocaleString();

    return avgSum;
  };

  return (
    <article className="Graph">
      <div className="graphWrap">
        <div className="valueNumWrap">
          {Y_LINE.map((yValue, idx) => (
            <ValueNum key={idx} yearMoney={yValue} />
          ))}
        </div>
        <div className="valueLineWrap">
          {GRAPH_LINE.map((numberLine, idx) => (
            <ValueLine key={idx} />
          ))}
        </div>
        <div className="valueGraphWrap">
          {salaryData.map(data => (
            <ValueGraph
              key={data.working_year}
              careerYears={data.working_year}
              totalSalary={data.total_salary}
            />
          ))}
        </div>
      </div>
      <div className="textWrap">
        <button className="job_group">개발</button>
        <button className="job">프론트엔드 개발자</button>
        <div className="avgWrap">
          <p className="avgText">프론트엔드 개발자 평균 연봉</p>
          <p className="avgValueWrap">
            <span className="avgValue">{valueToAVG(salaryData)}</span> 만원
          </p>
        </div>
      </div>
    </article>
  );
}

const Y_LINE = [
  '7,000',
  '6,000',
  '5,000',
  '4,000',
  '3,000',
  '2,000',
  '1,000',
  '0',
];

const GRAPH_LINE = new Array(7).fill('ValueLine');
