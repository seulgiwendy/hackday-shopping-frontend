import React from 'react';

const GroupButton = (props) => {
    let button = props.active ? (<li className="notice-categories active">{props.groupname}</li>) : (<li className="notice-categories">{props.groupname}</li>)

    return button;
}

export default GroupButton;