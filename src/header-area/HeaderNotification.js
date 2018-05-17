import React from 'react';
import {  } from 'react-bootstrap';
import HeaderNotificationBox from './HeaderNotificationBox';
import HeaderNotificationButton from './HeaderNotificationButton';

const HeaderNotification = (props) => {
    if(props.name === undefined) {
        return(
            <div className="unread-notification">
                <div className="unread-caption">로그인하세요</div>
            </div>
        )
    }
    return(
        <div className="unread-notification">
            <div className="unread-caption notification-items">안녕하세요, {props.name}님</div>
            <HeaderNotificationButton onClickHandler={props.handler} new={props.newCount} expanded={props.expanded}/>
            {props.expanded ? <HeaderNotificationBox/> : undefined}
        </div>
    )
}

export default HeaderNotification;