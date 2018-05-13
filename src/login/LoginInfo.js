import React from 'react';

const LoginInfo = (props) => {
    return(
        <div className="login-info">
          <p className="caption login-caption">
          로그인 정보를 잊으셨다면 직접 아이디/비밀번호 찾기를 진행해 주셔야 하며,
          찾기에 어려움이 있으신 경우 네이버 쇼핑 고객센터로 문의해주시기 바랍니다.
          </p>
          <p className="caption login-contact"><strong style={{color:"black"}}>전화 : 1588-3819</strong>&nbsp;(오전 9 ~ 오후 6시, 토/일/공휴일 제외)</p>
        </div>
    )
}

export default LoginInfo;