import React from 'react';
import './ResumeForm.scss';

const ResumeForm = props => {
  const { formTitle, formExplain, children } = props;

  return (
    <div className="ResumeForm">
      <h4 className="formTitle">{formTitle}</h4>
      <ul className="explainList">
        {formExplain.map((text, index) => {
          return (
            <li key={index} className="explain">
              {text}
            </li>
          );
        })}
      </ul>

      {children}
    </div>
  );
};

export default ResumeForm;
