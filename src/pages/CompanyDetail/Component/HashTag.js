import React from 'react';
import './HashTag.scss';

export default class HashTag extends React.Component {
  render() {
    const { tag } = this.props;

    return (
      <article className="HashTag">
        <ul className="hashTagList">
          {tag &&
            tag.map((el, index) => {
              return (
                <li className="hashTagContents" key={index}>
                  <div className="hashTagName">#{el.name}</div>
                </li>
              );
            })}
        </ul>
      </article>
    );
  }
}
