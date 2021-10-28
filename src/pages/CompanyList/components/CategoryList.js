import React, { Component } from 'react';
import './CategoryList.scss';

class CategoryList extends Component {
  render() {
    const { categorys, id, orderJobGroup } = this.props;

    return (
      <li className="CategoryList" onClick={() => orderJobGroup(id)}>
        <div className="imgCard">
          <p
            className="cardTag"
            style={{ backgroundColor: categorys.image_url }}
          />
          <span className="cardText">{categorys.name}</span>
        </div>
      </li>
    );
  }
}

export default CategoryList;
