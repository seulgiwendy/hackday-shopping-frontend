import React from 'react';

const LoginBox = (props) => {
    return(
        <div className="login-container">
            <h2 className="login-welcome"><img src="http://imgshopping.naver.net/adcenter/web//h_sac_login_20140521.gif"/></h2>
            <h3 className="login-welcome-caption">쇼핑파트너존에 오신 것을 환영합니다.</h3>
            <h6 className="login-pleaseregister">
					    쇼핑파트너존은 입점몰만 이용하실 수 있습니다.<br/>
					    처음 이용하시는 경우 <a href="#">입점신청</a>을 먼저 진행해주시기 바랍니다.
            </h6>
            <div className="login-box">
              <form className="login-form">
                <input className="id-input" placeholder="ID를 입력하세요"/>
                <input className="id-input password-input" placeholder="비밀번호를 입력하세요"/>
              </form>
              <img className="login-btn" src="http://imgshopping.naver.net/adcenter/web/login_btn.gif"/>
            </div>
            <div className="login-info">
              <p className="caption login-caption">
              로그인 정보를 잊으셨다면 직접 아이디/비밀번호 찾기를 진행해 주셔야 하며,
              찾기에 어려움이 있으신 경우 네이버 쇼핑 고객센터로 문의해주시기 바랍니다.
              </p>
              <p className="caption login-contact"><strong style={{color:"black"}}>전화 : 1588-3819</strong>&nbsp;(오전 9 ~ 오후 6시, 토/일/공휴일 제외)</p>
            </div>
          </div>
    )
}

export default LoginBox;
