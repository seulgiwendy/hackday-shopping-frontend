import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import LoginBox from './LoginBox';
import NoticeList from './notice/NoticeList';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className="body-container">
          <Route exact path="/" component={LoginBox}/>
          <Route exact path="/notice" component={NoticeList}/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
