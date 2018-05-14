import React from 'react';

const HeaderNotificationBox = (props) => {
    return(
        <div className="unread-notification-box">
            <span className="fas fa-caret-up notification-pointer"/>
            <div className="notification-inbox">
                <div className="notification-inbox-header">
                    알림
                </div>
                <div className="notification-inbox-list">
                    <div className="inbox-header inbox-new-header">
                        새로운 알림
                    </div>
                    <ul className="inbox-list-elements">
                        <li className="notification-element">새로운 공지사항이 있습니다.</li>
                        <li className="notification-element">새로운 공지사항이 있습니다.</li>
                        <li className="notification-element">새로운 공지사항이 있습니다.</li>
                        <li className="notification-element">새로운 공지사항이 있습니다.</li>
                    </ul>
                    <div className="inbox-header inbox-old-header">
                        이전 알림
                    </div>
                    <ul className="inbox-list-elements">
                        <li className="notification-element">새로운 공지사항이 있습니다.</li>
                        <li className="notification-element">새로운 공지사항이 있습니다.</li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderNotificationBox;