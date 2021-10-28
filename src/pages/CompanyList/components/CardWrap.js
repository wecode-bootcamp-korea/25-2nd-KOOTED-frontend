import React from 'react';
import { Link } from 'react-router-dom';
import './CardWrap.scss';

export default function CardWrap({ companyData }) {
  return (
    <div className="CardWrap">
      <Link to="/wd-detail">
        <div className="imgWrap">
          <img
            className="cardImg"
            alt={companyData.company_name}
            src={companyData.image_url}
          />
          <div className="heartWrap">
            <div className="heart">
              <i className="fas fa-heart" />
              <span className="heartCount">{companyData.count}</span>
            </div>
          </div>
        </div>
        <div className="cardBody">
          <p className="postName">{companyData.title}</p>
          <p className="postCompany">{companyData.company_name}</p>
          <p className="responseRate">응답률 매우 높음</p>
          <p className="postLocation">서울·한국</p>
          <p className="postReward">
            채용 보상금 {Number(companyData.reward).toLocaleString()}원
          </p>
        </div>
      </Link>
    </div>
  );
}
