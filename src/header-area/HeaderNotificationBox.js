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
                        {props.items.filter(v => !v.READ).map((v, i) => {
                            return <li className="notification-element">{v.message}</li>
                        })}
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}

export default HeaderNotificationBox;