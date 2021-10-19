import React from 'react';
import Footer from './Footer';
import './BodyTags.scss';

export default function BodyTags() {
  return (
    <>
      <div className="BodyTags">
        <p className="TagText">
          기업의 특별한 복지, 혜택 등 태그를 선택하여
          <br />
          나에게 꼭 맞는 포지션을 찾아보세요!
        </p>
        <div className="TagPick">
          <p className="tagPickText">카테고리 선택</p>
          <ul className="tagPickWrap">
            {TAG_LIST.map(tag => {
              return (
                <li className="tags" key={tag.id}>
                  <button
                    className="tagBtn"
                    style={{ backgroundColor: tag.color }}
                  >
                    {tag.tag_category}
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="tagPickText">선택된 태그</p>
          <ul className="choiceTagList">
            <li className="choiceTags">
              <button className="choiceTagBtn">연봉업계수준</button>
            </li>
            <li className="choiceTags">
              <button className="choiceTagBtn">투자</button>
            </li>
            <li className="choiceTags">
              <button className="choiceTagBtn">인원성장률</button>
            </li>
            <li className="choiceTags">
              <button className="choiceTagBtn">퇴사율</button>
            </li>
            <li className="choiceTags">
              <button className="choiceTagBtn">인원수</button>
            </li>
          </ul>
          <p className="guideText">
            해당 태그를 모두 만족하는 포지션이 노출됩니다.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

const TAG_LIST = [
  { id: 1, tag_category: '업계연봉수준', color: 'rgb(246, 246, 246)' },
  { id: 2, tag_category: '투자', color: 'rgb(240, 248, 248)' },
  { id: 3, tag_category: '인원성장률', color: 'rgb(238, 237, 244)' },
  { id: 4, tag_category: '퇴사율', color: 'rgb(238, 245, 246)' },
  { id: 5, tag_category: '인원수', color: 'rgb(236, 249, 247)' },
  { id: 6, tag_category: '업력', color: 'rgb(239, 251, 243)' },
  { id: 7, tag_category: '보상', color: 'rgb(233, 231, 238)' },
  { id: 8, tag_category: '기업문화', color: 'rgb(240, 249, 245)' },
  { id: 9, tag_category: '가족', color: 'rgb(233, 244, 251)' },
  { id: 10, tag_category: '출퇴근', color: 'rgb(236, 241, 241)' },
];
