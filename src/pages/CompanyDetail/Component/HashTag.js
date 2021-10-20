import React from 'react';
import './HashTag.scss';

export default class HashTag extends React.Component {
  render() {
    const { tag } = this.props;

    return (
      <article className="HashTag">
        <ul className="hashTagList">
          {tag &&
            tag.map(({ id, name }) => {
              return (
                <li className="hashTagContents" key={id}>
                  <div className="hashTagName">#{name}</div>
                </li>
              );
            })}
        </ul>
      </article>
    );
  }
}
