import React from 'react';
import './SubMenuColumn.scss';

class SubMenuColumn extends React.Component {
  render() {
    const { mainCategory, subCategory } = this.props;
    return (
      <div className="SubMenuColumn">
        <h3 className="columnHeader">
          {mainCategory}
          <i className="fas fa-chevron-right" />
        </h3>
        <ul className="columnList">
          {subCategory.map((category, index) => {
            return (
              <li key={index} className="listItem">
                {category}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SubMenuColumn;
