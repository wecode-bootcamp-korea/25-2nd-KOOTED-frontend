import React from 'react';

export default function TagData({ tagData, clickTagBtn }) {
  return (
    <li className="tags">
      <button
        className={`${tagData.isChecked ? 'tagBtn' : 'tagBtnOFF'}`}
        style={{ backgroundColor: tagData.color }}
        onClick={() => clickTagBtn(tagData.id)}
      >
        {tagData.tag_category}
      </button>
    </li>
  );
}
