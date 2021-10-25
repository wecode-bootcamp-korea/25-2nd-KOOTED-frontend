import React from 'react';
import ResumeItem from './ResumeItem/ResumeItem';
import './ResumeList.scss';

const TOKEN = localStorage.getItem('token');

class ResumeList extends React.Component {
  state = {
    resumeList: [],
  };

  getResumeList = () => {
    fetch('http://10.58.0.243:8000/resumes', {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ resumeList: data.result });
      });
  };

  deleteResumeList = id => {
    fetch(`http://10.58.0.243:8000/resume/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: TOKEN,
      },
    })
      .then(res => res.json())
      .then(data => this.getResumeList());
  };

  componentDidMount() {
    this.getResumeList();
  }

  goToResumeCreate = () => {
    const { history } = this.props;

    history.push({
      pathname: '/wd-resume',
      state: 'create',
    });
  };

  goToResumeUpdate = id => {
    const { history } = this.props;
    history.push({
      pathname: `/wd-resume/${id}`,
      state: 'update',
    });
  };

  render() {
    const { resumeList } = this.state;

    return (
      <div className="ResumeList">
        <div className="resumeListHeader">
          <h3 className="headerTitle">최근 문서</h3>
        </div>
        <div className="resumeListBody">
          <div className="addResume" onClick={this.goToResumeCreate}>
            <i className="far fa-clone" />
            <p className="addResumeText">새 이력서 작성</p>
          </div>
          {resumeList?.map(({ id, title, date, status }) => {
            return (
              <ResumeItem
                key={id}
                id={id}
                name={title}
                update={date}
                status={status}
                goToResumeUpdate={this.goToResumeUpdate}
                deleteResumeList={this.deleteResumeList}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ResumeList;
