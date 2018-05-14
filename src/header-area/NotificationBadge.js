import React from 'react';

const NotificationBadge = (props) => {
    return(
        <span className="unread-button-badge">{props.count}</span>
    )
}

export default NotificationBadge;