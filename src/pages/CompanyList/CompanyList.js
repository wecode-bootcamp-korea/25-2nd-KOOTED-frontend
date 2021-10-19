import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import FilterBtn from './components/FilterBtn';
import CardWrap from './components/CardWrap';
import './CompanyList.scss';

export default class CompanyList extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryInfo: [],
      companyList: [],
    };
  }

  componentDidMount() {
    fetch('/data/companyList/ListNav.json')
      .then(res => res.json())
      .then(category =>
        this.setState({
          categoryInfo: category.CATEGORY_LIST,
        })
      );

    fetch('/data/companyList/Company.json')
      .then(res => res.json())
      .then(company =>
        this.setState({
          companyList: company.COMPANY_LIST,
        })
      );
  }

  render() {
    const { categoryInfo, companyList } = this.state;

    return (
      <div className="CompanyList">
        <header className="categoryNav">
          <div className="categoryNavWrap">
            <h2 className="navText">전체 &gt; 개발 &gt; 웹 개발자</h2>
            <ul className="categoryLocation">
              {categoryInfo.map(category => (
                <CategoryList key={category.id} categorys={category} />
              ))}
              {categoryInfo.map(category => (
                <CategoryList key={category.id} categorys={category} />
              ))}
            </ul>
          </div>
        </header>
        <section className="categoryBody">
          <article className="filterWrap">
            <div className="btnList">
              <FilterBtn btnName="태그" btnTextFind="딱 맞는 기업 찾기" />
              <FilterBtn btnName="지역" btnText="한국" />
              <FilterBtn btnName="경력" btnText="전체" />
            </div>
            <div className="orderList">
              <button className="filterBtn">
                <span className="btnName">인기순</span>
                <img
                  className="drop"
                  alt="drop"
                  src="/images/companyList/hwasal.png"
                />
              </button>
            </div>
          </article>
          <div className="AllBookmarks">
            <i className="fas fa-bookmark" />
            <Link to="/wd-mypage" className="markText">
              북마크 모아보기 &gt;
            </Link>
          </div>
          <article className="cardListWrap">
            {companyList.map(company => (
              <CardWrap key={company.id} companyData={company} />
            ))}
          </article>
        </section>
      </div>
    );
  }
}
