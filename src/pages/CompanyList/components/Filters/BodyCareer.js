import React from 'react';
import Footer from './Footer';
import './BodyCareer.scss';

export default function BodyCareer() {
  return (
    <>
      <div className="BodyCareer">
        <select className="pickCareer">
          {CAREER_LIST.map(career => {
            return (
              <option key={career.id} value={career.id} class="pickOption">
                {career.career}
              </option>
            );
          })}
        </select>
      </div>
      <Footer />
    </>
  );
}

const CAREER_LIST = [
  { id: 1, career: '전체' },
  { id: 2, career: '신입' },
  { id: 3, career: '1년' },
  { id: 4, career: '2년' },
  { id: 5, career: '3년' },
  { id: 6, career: '4년' },
  { id: 7, career: '5년' },
  { id: 8, career: '6년' },
  { id: 9, career: '7년' },
  { id: 10, career: '8년' },
  { id: 11, career: '9년' },
  { id: 12, career: '10년 이상' },
];
