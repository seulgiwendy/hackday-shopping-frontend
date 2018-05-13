import React, { Component } from 'react';
import './login.css';
import JoinBox from './JoinBox';
import LoginInfo from './LoginInfo';

class LoginBox extends Component{

  constructor(props) {
    super(props);
    this.state = {
      idInput: '',
      pwdInput: '',
      showJoin: false,
      fetchedToken: undefined
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onClickPress = this.onClickPress.bind(this);
    this.onJoinClick = this.onJoinClick.bind(this);
    this.changeShowJoin = this.changeShowJoin.bind(this);
  }

  _fetchUserToken(id, pwd) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify({
        userid: id,
        password: pwd
      })
    }).then(response => {
      console.log(response);
      return response.json();
    }).then(json => {
      console.log(json);
      this.props.handler(json);
    })
  }

  changeShowJoin() {
    this.setState({
      showJoin: false
    });
  }

  onInputChange(e) {
    if(e.target.id === 'userid') {
      this.setState({
        idInput: e.target.value
      })
      return;
    }
    this.setState({
      pwdInput: e.target.value
    })
  }

  onClickPress() {
    this._fetchUserToken(this.state.idInput, this.state.pwdInput);
  }

  onJoinClick() {
    this.setState({
      showJoin: true
    });
  }
    
  render(){
      if(this.state.showJoin) {
        return(<JoinBox finishJoin={this.changeShowJoin}/>);
      }
        return (
        <div className="login-container">
            <h2 className="login-welcome"><img src="http://imgshopping.naver.net/adcenter/web//h_sac_login_20140521.gif"/></h2>
            <h3 className="login-welcome-caption">쇼핑파트너존에 오신 것을 환영합니다.</h3>
            <h6 className="login-pleaseregister">
					    쇼핑파트너존은 입점몰만 이용하실 수 있습니다.<br/>
					    처음 이용하시는 경우 <a className="join-link" onClick={this.onJoinClick}>입점신청</a>을 먼저 진행해주시기 바랍니다.
            </h6>
            <div className="login-box">
              <form className="login-form">
                <input className="id-input" id="userid" placeholder="ID를 입력하세요" onChange={this.onInputChange}/>
                <input className="id-input password-input" id="password" type="password "placeholder="비밀번호를 입력하세요" onChange={this.onInputChange}/>
              </form>
              <a className="login-btn" onClick={this.onClickPress}><img src="http://imgshopping.naver.net/adcenter/web/login_btn.gif"/></a>
            </div>
            <LoginInfo/>
        </div>
      );
  }
    
}

export default LoginBox;
