import React from 'react';
import './ResumeItem.scss';

class ResumeItem extends React.Component {
  render() {
    const { id, name, update, status, goToResumeUpdate, deleteResumeList } =
      this.props;

    return (
      <div className="ResumeItem">
        <div className="itemTop" onClick={() => goToResumeUpdate(id)}>
          <h3 className="itemTitle">{name}</h3>
          <h5 className="itemDate">{update.split('T')[0]}</h5>
        </div>
        <div className="itemBottom">
          <h5 className="itemState">
            <span className="itemFile">한</span>
            {status}
          </h5>
          <i
            className="far fa-trash-alt"
            onClick={() => deleteResumeList(id)}
          />
        </div>
      </div>
    );
  }
}

export default ResumeItem;
