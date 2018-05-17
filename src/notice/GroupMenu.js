import React from 'react';
import GroupButton from './GroupButton';

const getGroupButtons = (group) => {
    let groups = []

    group.forEach((v, i) => {
        groups.push(<GroupButton groupname={v.symbol} active={true}/>)
    });

    return groups;
}

const GroupMenu = (props) => {
    return(
        <div className="notice-header-icons">
            <ul>
                {getGroupButtons(props.groups)}
            </ul>
        </div>
    )
}

export default GroupMenu;