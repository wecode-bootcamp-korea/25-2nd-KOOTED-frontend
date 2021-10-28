import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CategoryList.scss';

class CategoryList extends Component {
  render() {
    const { categorys } = this.props;

    return (
      <li className="CategoryList">
        <Link to="/wd-category">
          <div className="imgCard">
            <p
              className="cardTag"
              style={{ backgroundColor: categorys.image_url }}
            />
            <span className="cardText">{categorys.name}</span>
          </div>
        </Link>
      </li>
    );
  }
}

export default CategoryList;
