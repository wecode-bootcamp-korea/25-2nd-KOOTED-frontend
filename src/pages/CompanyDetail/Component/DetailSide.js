import React from 'react';
import { withRouter } from 'react-router-dom';
import ResumeItemList from './ResumeItemList';
import API, { TOKEN } from '../../../config';
import './DetailSide.scss';

class DetailSide extends React.Component {
  constructor() {
    super();
    this.state = {
      recommend: '',
      resumeId: 0,
      postId: 0,
      isSelectedCheckBoxies: {},
      bookmarkCount: 0,
    };
  }

  componentDidMount() {
    this.setState({
      postId: this.props.postId,
    });
  }

  handleSubmit = () => {
    const { recommend, postId, resumeId } = this.state;

    fetch(API.applicationInfo, {
      method: 'POST',
      headers: {
        Authorization: TOKEN,
      },
      body: JSON.stringify({
        recommender: recommend,
        post_id: postId,
        resume_id: resumeId,
      }),
    })
      .then(res => res.json())
      .then(data => {
        alert('지원 완료되었습니다!');
        this.props.history.push('/wd-mypage');
      });
  };

  handleBookMark = e => {
    const { postId } = this.state;
    const { isMarked } = this.props;

    fetch(`${API.recruitInfo}/bookmarks`, {
      method: isMarked ? 'DELETE' : 'POST',
      headers: {
        Authorization: TOKEN,
      },
      body: JSON.stringify({
        post_id: postId,
      }),
    });
  };

  handleRecommend = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  getResumeId = (id, status) => {
    const { isSelectedCheckBoxies } = this.state;
    this.setState({
      resumeId: id,
      isSelectedCheckBoxies: { ...isSelectedCheckBoxies, [id]: !status },
    });
  };

  render() {
    const { isSelectedCheckBoxies } = this.state;
    const {
      result,
      isSide,
      likeCount,
      handleIcon,
      handleButton,
      user,
      isMarked,
    } = this.props;

    const submitBtnValid = Object.values(isSelectedCheckBoxies).includes(true);

    return (
      <div className="DetailSide">
        <aside className="detailAside">
          <header className="sideTop">
            <div className="compensation">
              <p className="sideTitle">채용보상금</p>
              <i className="fas fa-share-alt" />
              <ul>
                <li>
                  <h4>추천인</h4>
                  <p>
                    {parseInt(result.recommender_reward)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </p>
                </li>
                <li>
                  <h4>지원자</h4>
                  <p>
                    {parseInt(result.applicant_reward)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </p>
                </li>
              </ul>
            </div>
            <div className="supportButton">
              <button
                className={isMarked ? 'noneBookMark' : 'bookMark'}
                onClick={handleIcon}
              >
                {isMarked ? (
                  <i className="fas fa-bookmark" />
                ) : (
                  <i className="far fa-bookmark" />
                )}
                <span className="bookMarkName" onClick={this.handleBookMark}>
                  북마크하기
                </span>
              </button>
              <button className="support" onClick={handleButton}>
                <span className="supportName">지원하기</span>
              </button>
            </div>
            <button className="bookMarkLike">
              {isMarked ? (
                <i className="fas fa-bookmark" />
              ) : (
                <i className="far fa-bookmark" />
              )}
              <span>{likeCount}</span>
            </button>
          </header>
          <footer className="sideBottom">
            <div className="pass">
              <span className="aiPass">kooted ai 합격예측</span>
              <div className="curious">
                <span className="documentPass">서류합격률이 궁금하다면?</span>
                <i className="far fa-question-circle" />
              </div>
            </div>
          </footer>
        </aside>
        <aside className={isSide ? 'supportSide' : 'noSupportSide'}>
          <header className="supportHeader">
            <p className="supportTitle">지원하기</p>
            <button className="back" onClick={handleButton}>
              뒤로
            </button>
          </header>
          <article className="supportContents">
            <div className="contentsConfirm">
              <p className="oneMore">
                주요 업무 내용을 한 번 더 확인해 주세요.
              </p>
              <p className="tip">
                직무와 맞는 포지션일수록 서류합격률이 높아져요!
              </p>
            </div>
            <section className="inputContents">
              <p className="supsubTitle">지원 정보</p>
              <div className="subInput">
                <span className="inputTitle">이름</span>
                <input className="inputBox" value={user?.name} />
              </div>
              <div className="subInput">
                <span className="inputTitle">이메일</span>
                <input className="inputBox" value={user?.email} />
              </div>
              <div className="subInput">
                <span className="inputTitle">연락처</span>
                <button className="inputButton">
                  <span className="inputText">{user?.mobile_number}</span>
                </button>
              </div>
              <div className="subInput">
                <span className="inputTitle">추천인</span>
                <input
                  className="inputBox"
                  placeholder="선택사항"
                  name="recommend"
                  onChange={this.handleRecommend}
                />
              </div>
              <p className="supsubTitle">첨부파일</p>
              <ResumeItemList getResumeId={this.getResumeId} />

              <p className="passRate">
                원티드 이력서로 지원하면 최종 합격률이 40% 높아집니다.
              </p>
            </section>
          </article>
          <footer className="submit">
            <button
              className={submitBtnValid ? 'submitButton' : 'failSubmit'}
              disabled={!submitBtnValid}
              onClick={this.handleSubmit}
            >
              제출하기
            </button>
          </footer>
        </aside>
      </div>
    );
  }
}

export default withRouter(DetailSide);
