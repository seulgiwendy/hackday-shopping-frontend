import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { PropsRoute } from 'react-router';
import logo from './logo.svg';
import './App.css';
import Header from './header-area/Header';
import Footer from './Footer';
import LoginBox from './login/LoginBox';
import NoticeList from './notice/NoticeList';
import ArticlePage from './notice/ArticlePage';
import NewArticlePage from './admin/NewArticlePage';
import JoinBox from './login/JoinBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: 123,
      username: '',
      usergroups: []
    }
    this.onUserLogin = this.onUserLogin.bind(this);
    this.onUserLogout = this.onUserLogout.bind(this);
  }

  onUserLogin(info) {
    console.log(info);

    let loginUsername = info.username;
    let token = info.accessToken;
    let groups = info.usergropus;
    this.setState({
      userToken: token,
      username: loginUsername,
      usergroups: groups
    });
  }

  onUserLogout() {
    this.setState({
      userToken: undefined
    });
  }

  render() {
    if(this.state.userToken === undefined) {
      return(
        <div className="App">
          <Header/>
          <div className="body-container">
            <LoginBox handler={this.onUserLogin}/>
          </div>
          <Footer/>
        </div>
      )
    }
    return (
    <BrowserRouter>
      <div className="App">
        <Header token={this.state.userToken} groups={this.state.usergroups} username={this.state.username}/>
        <div className="body-container">
          <Route exact path="/" component={NoticeList}/>
          <Route exact path="/notice" component={NoticeList}/>
          <Route exact path="/article" component={ArticlePage}/>
          <Route exact path="/admin" component={NewArticlePage}/>
          <Route exact path="/join" component={JoinBox}/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    );
  }
}



export default App;
