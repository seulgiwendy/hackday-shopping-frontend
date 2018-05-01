import React from 'react';

const Header = (props) => {

    return(
        <header className="app-header">
          <div className="logo header-logo">
            <img className="naver-logo" src="http://imgshopping.naver.net/adcenter/web/h_naver.gif"/>
            <img className="shopping-partner-logo" src="http://imgshopping.naver.net/adcenter/web/h_partner_zone.gif"/>
          </div>
          <div className="unread-notification">
              <div className="unread-caption">공지사항 열기</div>
            </div>
        </header>
    )
}

export default Header;