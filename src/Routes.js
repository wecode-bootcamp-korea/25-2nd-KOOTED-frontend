import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import CompanyList from './pages/CompanyList/CompanyList';
import CompanyDetail from './pages/CompanyDetail/CompanyDetail';
import Mypage from './pages/Mypage/Mypage';
import Footer from './components/Footer/Footer';
import Resume from './pages/Resume/Resume';
import ResumeList from './pages/ResumeList/ResumeList';
import OAuthKakao from './components/Login/OAuthKakao';
import Specialty from './pages/Specialty/Specialty';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/wd-resume-list" component={ResumeList} />
          <Route exact path="/specialty" component={Specialty} />
          <Route exact path="/wd-resume/:id" component={Resume} />
          <Route exact path="/wd-resume" component={Resume} />
          <Route path="/oauth" component={OAuthKakao} />
          <>
            <Route exact path="/" component={Main} />
            <Route exact path="/wd-list/:id" component={CompanyList} />
            <Route exact path="/wd-detail/:id" component={CompanyDetail} />
            <Route exact path="/wd-mypage" component={Mypage} />
            <Footer />
          </>
        </Switch>
      </Router>
    );
  }
}
export default Routes;
