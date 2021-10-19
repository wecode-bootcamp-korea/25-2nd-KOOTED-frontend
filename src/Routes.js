import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import CompanyList from './pages/CompanyList/CompanyList';
import CompanyDetail from './pages/CompanyDetail/CompanyDetail';
import Mypage from './pages/Mypage/Mypage';
import Resume from './pages/Resume/Resume';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/wd-list" component={CompanyList} />
          <Route exact path="/wd-detail" component={CompanyDetail} />
          <Route exact path="/wd-mypage" component={Mypage} />
          <Route exact path="/wd-resume" component={Resume} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
