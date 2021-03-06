import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import Graph from './components/Graph/Graph';
import FilterBtn from './components/FilterBtn';
import CardWrap from './components/CardWrap';
import API from '../../config';
import './CompanyList.scss';

export default class CompanyList extends React.Component {
  constructor() {
    super();
    this.state = {
      companyList: [],
      categoryList: [],
      salaryList: [],
      categoryInfo: {},
    };
  }

  getFilterTagResult = result => {
    this.setState({
      companyList: result,
    });
  };

  handleChange = e => {
    const { value } = e.target;
    fetch(`${API.recruitInfo}?sort=${value}`)
      .then(res => res.json())
      .then(company =>
        this.setState({
          companyList: company.result,
        })
      );
  };

  orderJobGroup = id => {
    fetch(`${API.recruitInfo}?job-group=${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          companyList: data.result,
          salaryList: data.salary_list,
        });
      });
    window.location.href = `/wd-list/${id}`;
  };

  componentDidMount() {
    const { match } = this.props;

    fetch(`${API.recruitInfo}?job-group=${match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          companyList: data.result,
          categoryList: data.category_list,
          salaryList: data.salary_list,
          categoryInfo: data.category_info,
        });
      });
  }

  render() {
    const { companyList, categoryList, salaryList, categoryInfo } = this.state;
    return (
      <div className="CompanyList">
        <header className="categoryNav">
          <div className="categoryNavWrap">
            <h2 className="navText">카테고리</h2>
            <ul className="categoryLocation">
              {categoryList.map(category => (
                <CategoryList
                  key={category.id}
                  categorys={category}
                  id={category.id}
                  orderJobGroup={this.orderJobGroup}
                />
              ))}
            </ul>
          </div>
        </header>
        <section className="categoryBody">
          <Graph
            salaryList={salaryList}
            jobGroup={categoryInfo.job_group_name}
            subGroup={categoryInfo.job_name}
          />
          <article className="filterWrap">
            <div className="btnList">
              <FilterBtn
                btnName="태그"
                btnTextFind="딱 맞는 기업 찾기"
                getFilterTagResult={this.getFilterTagResult}
              />
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
