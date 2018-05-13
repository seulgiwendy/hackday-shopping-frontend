import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { PropsRoute } from 'react-router';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
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
      userToken: undefined
    }
    this.onUserLogin = this.onUserLogin.bind(this);
    
    const HandledLoginBox = (props) => {
      return(
        <LoginBox onLogin={this.onUserLogin}/>
      );
    }
  }

  onUserLogin(token) {
    this.setState({
      userToken: token
    });
  }

  render() {
    console.log(this.state.userToken);
    return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className="body-container">
          <Route exact path="/" render={(props) =>{
            if(this.state.userToken === undefined) {
              return <LoginBox handler={this.onUserLogin}/>
            }
            return <NoticeList/>
          } }/>
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
