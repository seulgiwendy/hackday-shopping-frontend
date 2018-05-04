import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import LoginBox from './LoginBox';
import NoticeList from './notice/NoticeList';
import ArticlePage from './notice/ArticlePage';
import NewArticlePage from './admin/NewArticlePage';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className="body-container">
          <Route exact path="/" component={LoginBox}/>
          <Route exact path="/notice" component={NoticeList}/>
          <Route exact path="/article" component={ArticlePage}/>
          <Route exact path="/admin" component={NewArticlePage}/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
