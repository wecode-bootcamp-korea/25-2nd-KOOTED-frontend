import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import Graph from './components/Graph/Graph';
import FilterBtn from './components/FilterBtn';
import CardWrap from './components/CardWrap';
import './CompanyList.scss';

export default class CompanyList extends React.Component {
  constructor() {
    super();
    this.state = {
      companyList: [],
    };
  }

  handleChange = e => {
    const { value } = e.target;
    fetch(`/data/companyList/Company.json?sort=${value}`)
      .then(res => res.json())
      .then(company =>
        this.setState({
          companyList: company.COMPANY_LIST,
        })
      );
  };

  componentDidMount() {
    fetch('http://10.58.0.243:8000/posts?job=5')
      .then(res => res.json())
      .then(listData =>
        this.setState({
          companyList: listData.result,
        })
      );
  }

  render() {
    const { companyList } = this.state;

    return (
      <div className="CompanyList">
        <header className="categoryNav">
          <div className="categoryNavWrap">
            <h2 className="navText">전체 &gt; 개발 &gt; 웹 개발자</h2>
            <ul className="categoryLocation">
              {CATEGORY_DATA.map((category, idx) => (
                <CategoryList key={idx} categorys={category} />
              ))}
            </ul>
          </div>
        </header>
        <section className="categoryBody">
          <Graph />
          <article className="filterWrap">
            <div className="btnList">
              <FilterBtn btnName="태그" btnTextFind="딱 맞는 기업 찾기" />
              <FilterBtn btnName="지역" btnText="한국" />
              <FilterBtn btnName="경력" btnText="전체" />
            </div>
            <div className="orderList">
              <select className="orderBtn" onChange={this.handleChange}>
                <option value="-created_at">최신순</option>
                <option value="-count">인기순</option>
                <option value="-reward">보상금순</option>
              </select>
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

const CATEGORY_DATA = [
  { id: 1, name: '개발', image_url: '#980000' },
  { id: 2, name: '경영 비즈니스', image_url: '#997000' },
  { id: 3, name: '마케팅 광고', image_url: '#6B9900' },
  { id: 4, name: '디자인', image_url: '#008299' },
  { id: 5, name: '영업', image_url: '#003399' },
];
