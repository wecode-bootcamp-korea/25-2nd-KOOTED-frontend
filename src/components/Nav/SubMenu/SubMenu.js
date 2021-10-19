import React from 'react';
import './SubMenu.scss';
import SubMenuColumn from './SubMenuColumn/SubMenuColumn';

class SubMenu extends React.Component {
  render() {
    const { isMenuVisible } = this.props;

    return (
      <div
        className={`subMenu ${isMenuVisible ? 'showSubMenu' : 'hideSubMenu'}`}
      >
        <SubMenuColumn
          mainCategory="개발"
          subCategory={['웹 개발자', '서버 개발자', '프론트엔드 개발자']}
        />
        <SubMenuColumn
          mainCategory="경영·비즈니스"
          subCategory={['서비스 기획자', 'PM·PO', '사업·개발·기획자']}
        />
        <SubMenuColumn
          mainCategory="마케팅광고"
          subCategory={['디지털 마케터', '마케터', '퍼포먼스 마케터']}
        />
        <SubMenuColumn
          mainCategory="디자인"
          subCategory={['UX 디자이너', 'UI,GUI 디자이너', '웹 디자이너']}
        />
        <SubMenuColumn
          mainCategory="영업"
          subCategory={['기업영업', '외부영업', '영업 관리자']}
        />
      </div>
    );
  }
}

export default SubMenu;
