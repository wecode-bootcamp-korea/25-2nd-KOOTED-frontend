import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Signup.scss';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      isCheckForPersonalInfoUsage: false,
      alertName: '',
    };
  }

  render() {
    const { isCheckForPersonalInfoUsage, alertName } = this.state;

    return (
      <div className="SignupModalWrap">
        <form className="modalItems">
          <div className="modalHeader">
            <h1>회원가입</h1>
            <button>
              <i className="fas fa-times" />
            </button>
          </div>
          <div className="modalBody">
            <div className="nameInputWrap">
              <label className="inputLabel">
                이름
                <input
                  name="name"
                  className="input name"
                  placeholder="이름을 입력해주세요."
                  onChange={this.getDatas}
                />
              </label>
              <div className="alertMessage">{alertName}</div>
            </div>
            <div className="emailInputWrap">
              <label className="inputLabel">
                이메일
                <input
                  type="email"
                  name="email"
                  className="input email"
                  placeholder="이메일을 입력해 주세요."
                  onChange={this.getDatas}
                />
              </label>
              <div className="alertMessage">alertEmail</div>
            </div>
            <div className="passwordInputWrap">
              <label className="inputLabel">
                비밀번호
                <input
                  type="password"
                  name="password"
                  className="input password"
                  placeholder="비밀번호를 입력해 주세요."
                  onChange={this.getDatas}
                />
              </label>
              <div className="passwordInfo">
                영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상
                입력해 주세요.
              </div>
            </div>

            <div className="repasswordInputWrap">
              <label className="inputLabel">
                비밀번호 확인
                <input
                  type="password"
                  name="repassword"
                  className="input password"
                  placeholder="비밀번호를 다시 한번 입력해 주세요."
                  onChange={this.getDatas}
                />
              </label>
            </div>
            <div className="agreement">
              <div className="personalData">
                <div className="checkbox">
                  <i className="far fa-square" />
                </div>
                <div className="acceptPrivacy">
                  <input
                    type="checkbox"
                    onClick={() => {
                      this.setState({
                        isCheckForPersonalInfoUsage:
                          !isCheckForPersonalInfoUsage,
                      });
                    }}
                  />
                  개인정보 수집 및 이용동의 (필수)
                  <Link to="#">자세히</Link>
                </div>
              </div>
            </div>
            <div className="signupBtnWrap">
              <button
                className={`signupBtn ${
                  isCheckForPersonalInfoUsage ? '' : 'inactiveBtn'
                }`}
                disabled={!isCheckForPersonalInfoUsage}
              >
                회원가입하기
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);
