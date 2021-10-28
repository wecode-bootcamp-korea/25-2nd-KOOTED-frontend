import React from 'react';
import DetailSide from './Component/DetailSide';
import HashTag from './Component/HashTag';
import AddInfo from './Component/AddInfo';
import API, { TOKEN } from '../../config';
import './CompanyDetail.scss';

export default class CompanyDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      result: {},
      isSide: false,
      likeCount: 0,
      deadline: '',
      user: {},
      isMarked: false,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    fetch(`${API.recruitInfo}/${match.params.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          result: res.result,
          likeCount: res.result.count,
          deadline: !res.result.deadline ? '상시모집' : res.result.deadline,
        });
      });

    fetch(`${API.getUserInfo}?post_id=${match.params.id}`, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          user: res.user,
          isMarked: res.user?.bookmark,
        });
      });
  }

  handleIcon = e => {
    const { isMarked } = this.state;
    this.setState(prevState => ({
      isMarked: !prevState.isMarked,
      likeCount: isMarked ? prevState.likeCount - 1 : prevState.likeCount + 1,
    }));
  };

  handleButton = e => {
    this.setState(({ isSide }) => ({ isSide: !isSide }));
  };

  render() {
    const { deadline, isSide, likeCount, result, isCheck, user, isMarked } =
      this.state;

    const { match } = this.props;
    return (
      <div className="CompanyDetail">
        <main className="detailMain">
          <img
            className="detailImage"
            alt="company_image"
            src={result.image_url && result.image_url[0].image_url}
          />
          <section className="detailTitle">
            <header className="companyTitle">
              <p className="employment">{result.title}</p>
              <div className="companyInfo">
                <span className="companyName">{result.company_name}</span>
                <span className="respon">응답률 평균이상</span>
                <span className="location">| {result.location}</span>
              </div>
            </header>
            <HashTag tag={result.tag} />
          </section>
          <section className="companyDetails">
            <div className="companyInt">
              <p className="companyMainContent">{result.content}</p>
            </div>
            <div className="bussinessConditions">
              <div className="conditionsTitle">
                <p className="companySubContent">주요업무</p>
                <span>- 임베디드 RTOS 드라이버 및 API 개발</span>
              </div>
              <div className="conditionsTitle">
                <p className="companySubContent">자격요건</p>
                <span>- 임베디드 RTOS 드라이버 및 API 개발</span>
              </div>
              <div className="conditionsTitle">
                <p className="companySubContent">우대사항</p>
                <span>- 임베디드 RTOS 드라이버 및 API 개발</span>
              </div>
              <div className="conditionsTitle">
                <p className="companySubContent">혜택 및 복지</p>
                <span>- 임베디드 RTOS 드라이버 및 API 개발</span>
              </div>
            </div>
          </section>
          <hr className="endLine" />
          <AddInfo deadline={deadline} />
          <section className="companySite">
            <div className="companySiteLeft">
              <button className="buttonLeft">
                <i className="fab fa-drupal" />
              </button>
              <div className="companySubName">
                <span className="followCompany">{result.company_name}</span>
                <span className="companyLine">보건,사회복지</span>
              </div>
            </div>
            <div className="companySiteRight">
              <button className="followButton">팔로우</button>
            </div>
          </section>
          <section className="warning">
            <div className="warningIcon">
              <i className="fas fa-exclamation-circle" />
            </div>
            <div className="warningContents">
              <span>
                본 채용정보는 원티드랩의 동의없이 무단전재,재배포,제공할
                수없으며, 구직활동 이외의 용도로 사용할 수 없습니다.
              </span>
            </div>
          </section>
        </main>
        <DetailSide
          result={result}
          isSide={isSide}
          isCheck={isCheck}
          likeCount={likeCount}
          handleIcon={this.handleIcon}
          handleButton={this.handleButton}
          user={user}
          isMarked={isMarked}
          postId={match.params.id}
        />
      </div>
    );
  }
}
