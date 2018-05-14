import React from 'react';
import NotificationBadge from './NotificationBadge';

const HeaderNotificationButton = (props) => {
    if(props.expanded) {
        return(
            <div className="unread-button" onClick={props.onClickHandler}>
                <i className="fa fa-globe"/>
                
            </div>
        );
    }

    if(props.new > 0) {
        return(
            <div className="unread-button" onClick={props.onClickHandler}>
                <i className="fa fa-globe"/>
                <NotificationBadge count={props.new}/>
            </div>
        )
    }

    return(
        <div className="unread-button empty-inbox" onClick={props.onClickHandler}>
            <i className="fa fa-globe"/>
        </div>
    );
}

export default HeaderNotificationButton;