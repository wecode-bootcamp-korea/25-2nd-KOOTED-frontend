import React from 'react';
import './SkillTag.scss';

const SkillTag = ({
  id,
  skill,
  action,
  handleAddTag,
  handleRemoveTag,
  children,
}) => {
  return (
    <div
      className={`SkillTag ${action}`}
      onClick={() =>
        action === 'add' ? handleAddTag(id) : handleRemoveTag(id)
      }
    >
      <p className="skill">{skill}</p>
      {children}
    </div>
  );
};

export default SkillTag;
