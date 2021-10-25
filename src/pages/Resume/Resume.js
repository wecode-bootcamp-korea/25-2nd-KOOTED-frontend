import React, { useState, useEffect } from 'react';
import ResumeForm from './ResumeForm/ResumeForm';
import CareerListItem from './CareerListItem/CareerListItem';
import SkillTag from './SkillTag/SkillTag';
import './Resume.scss';

const TOKEN = localStorage.getItem('token');

// 스킬 태그 리스트
const skillList = [
  { id: 1, name: 'Python' },
  { id: 2, name: 'Spring Framework' },
  { id: 3, name: 'AWS' },
  { id: 4, name: 'Git' },
  { id: 5, name: 'iOS' },
  { id: 6, name: 'HTML' },
  { id: 7, name: 'Javascript' },
  { id: 8, name: 'React.js' },
];

const Resume = ({ location, match, history }) => {
  // state 선언
  const [userInfo, setUserInfo] = useState({});
  const [tagList, setTagList] = useState([]);
  const [isChecked, setIsChecked] = useState(0);
  const [writingStatus, setWritingStatus] = useState('작성중');
  const [userInputs, setUserInputs] = useState([]);

  // 구조 분해 할당
  const { name, email } = userInfo;
  const {
    startYear,
    startMonth,
    endYear,
    endMonth,
    title,
    introduction,
    college,
    companyName,
    duty,
    careers,
  } = userInputs;

  // 컴포넌트 렌더 시: 새로 작성일 때는 유저 정보만, 수정일 때는 원래 적었던 정보 모두 GET
  useEffect(() => {
    if (location.state === 'update') {
      fetch(`http://10.58.0.243:8000/resume/${match.params.id}`, {
        headers: {
          Authorization: TOKEN,
        },
      })
        .then(res => res.json())
        .then(({ user_info, resume_info }) => {
          setUserInfo(user_info);
          setUserInputs(resume_info);

          // id값 없이 서버에서 받아오는 tagList에 id값 붙여주기
          resume_info.skills.forEach(skill => {
            const skillId = skillList.find(list => list.name === skill.name).id;
            skill.id = skillId;
          });

          setTagList(resume_info.skills);
        });
    } else {
      fetch(`http://10.58.0.243:8000/users`, {
        headers: {
          Authorization: TOKEN,
        },
      })
        .then(res => res.json())
        .then(({ user_info }) => {
          setUserInfo(user_info);
        });
    }
  }, [location.state, match.params.id]);

  // 재직중 isChecked 값 가져오기
  const getIsChecked = checkedValue => {
    setIsChecked(checkedValue);
  };

  // SkillTag 추가
  const handleAddTag = id => {
    const isAdded = tagList.find(tag => tag.id === id);

    if (!isAdded) {
      const newArr = tagList.concat({
        id: id,
        name: skillList[id - 1].name,
      });

      setTagList(newArr);
    } else {
      alert('이미 추가된 태그입니다.');
    }
  };

  // SkillTag 삭제
  const handleRemoveTag = id => {
    const newArr = tagList.filter(item => id !== item.id);

    setTagList(newArr);
  };

  // 유저가 Input에 입력한 Resume 내용 GET
  const handleOnChange = event => {
    setUserInputs({
      ...userInputs,
      [event.target.name]: event.target.value,
    });
  };

  // 사용자가 입력한 이력서 내용 서버에 전송
  const handleSubmit = () => {
    // 선택된 태그리스트를 모아두는 배열 생성
    let tagNames = [];
    tagList.map(list => tagNames.push({ name: list.name }));

    const dateOfJoining = `${startYear}-${startMonth}-01`;
    const dateOfResigning = `${endYear}-${endMonth}-01`;
    setWritingStatus('작성 완료');

    if (location.state === 'update') {
      fetch(`http://10.58.0.243:8000/resume/${match.params.id}`, {
        method: 'PUT',
        headers: {
          Authorization: TOKEN,
        },
        body: JSON.stringify({
          title: title,
          introduction: introduction,
          college: college,
          careers: [
            {
              id: 1,
              company_name: companyName,
              duty: duty,
              date_of_joining: dateOfJoining,
              date_of_resigning: dateOfResigning,
              in_office: isChecked,
            },
          ],
          skills: tagNames,
          status: writingStatus,
        }),
      }).then(res => res.json());
    } else {
      fetch(`http://10.58.0.243:8000/resume`, {
        method: 'POST',
        headers: {
          Authorization: TOKEN,
        },
        body: JSON.stringify({
          title: title,
          introduction: introduction,
          college: college,
          careers: [
            {
              id: 1,
              company_name: companyName,
              duty: duty,
              date_of_joining: dateOfJoining,
              date_of_resigning: dateOfResigning,
              in_office: isChecked,
            },
          ],
          skills: tagNames,
          status: writingStatus,
        }),
      }).then(res => res.json());
    }

    history.push('/wd-resume-list');
  };

  return (
    <div className="Resume">
      <header className="header">
        <i className="fas fa-globe" />
        <select className="transferLanguage" defaultValue="default">
          <option value="korean">한국어</option>
          <option value="japanese">日本語</option>
          <option value="chinese">中文</option>
          <option value="chinese">English</option>
        </select>
      </header>
      {/* 사용자 정보 */}
      <section className="resumeContainer">
        <input
          className="title"
          name="title"
          type="text"
          placeholder="제목"
          onChange={handleOnChange}
          value={title}
        />
        <div className="personalInfo">
          <p className="name">{name}</p>
          <p className="email">{email}</p>
          <p className="contact">010-9945-7580</p>
        </div>
        <div className="resumeContent">
          {/* Introduce Form */}
          <ResumeForm
            formTitle="간단 소개글"
            formExplain={[
              '• 본인의 업무 경험을 기반으로 핵심역량과 업무 스킬을 간단히 작성해주세요.',
              '• 3~5줄로 요약하여 작성하는 것을 추천합니다!',
            ]}
          >
            <textarea
              className="introContents"
              name="introduction"
              rows="12"
              placeholder="간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요. (3~5줄 권장)"
              onChange={handleOnChange}
              value={introduction}
            />
          </ResumeForm>
          {/* Career Form */}
          <ResumeForm
            formTitle="경력"
            formExplain={[
              '• 담당하신 업무 중 우선순위가 높은 업무를 선별하여 최신순으로 작성해주세요. ',
              '• 경력사항이 없는 경우 신입으로 작성해주세요.',
              '• 업무 성과는 되도록 구체적인 숫자 혹은 %로 표현해주세요!',
            ]}
          >
            <button className="btnAddColumn">+ 추가</button>

            <ul className="careerList">
              <CareerListItem
                startYear={careers?.[0].date_of_joining.split('-')[0]}
                startMonth={careers?.[0].date_of_joining.split('-')[1]}
                endYear={careers?.[0].date_of_resigning.split('-')[0]}
                endMonth={careers?.[0].date_of_resigning.split('-')[1]}
                inOffice={careers?.[0].in_office}
                companyName={careers?.[0].company_name}
                duty={careers?.[0].duty}
                handleOnChange={handleOnChange}
                getIsChecked={getIsChecked}
              />
            </ul>
          </ResumeForm>
          {/* Education Form */}
          <ResumeForm
            formTitle="학력"
            formExplain={['• 최신순으로 작성해주세요.']}
          >
            <input
              className="schoolName"
              name="college"
              type="text"
              placeholder="학교명"
              onChange={handleOnChange}
              value={college}
            />
          </ResumeForm>
          {/* Skills Form */}
          <ResumeForm
            formTitle="스킬"
            formExplain={[
              '• 개발 스택, 디자인 툴, 마케팅 툴 등 가지고 있는 직무와 관련된 스킬을 추가해보세요.',
              '• 데이터 분석 툴이나 협업 툴 등의 사용해본 경험이 있으신 툴들도 추가해보세요.',
            ]}
          >
            <div className="skills">
              <div className="skillsHeader">
                <h5 className="skillSub">
                  많이 쓰는 인기 스킬을 추가해보세요!
                </h5>
                <button className="btnShowMore">더보기</button>
              </div>
              <div className="selectSkills">
                {skillList.map(({ id, name }) => {
                  return (
                    <SkillTag
                      key={id}
                      id={id}
                      skill={name}
                      handleAddTag={handleAddTag}
                      action="add"
                    >
                      <i className="fas fa-plus" />
                    </SkillTag>
                  );
                })}
              </div>
              <div className="selected">
                {tagList.map(({ id, name }) => {
                  return (
                    <SkillTag
                      key={id}
                      id={id}
                      skill={name}
                      handleRemoveTag={handleRemoveTag}
                      action="remove"
                    >
                      <i className="fas fa-minus" />
                    </SkillTag>
                  );
                })}
              </div>
            </div>
          </ResumeForm>
        </div>
      </section>
      <footer className="footer">
        <button className="btnFooter btnTempSave">임시 저장</button>
        <button className="btnFooter btnSave" onClick={handleSubmit}>
          작성 완료
        </button>
      </footer>
    </div>
  );
};

export default Resume;
