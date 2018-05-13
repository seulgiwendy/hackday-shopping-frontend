import React from 'react';
import { Checkbox } from 'react-bootstrap';

const GroupCheckbox = (props) => {
    return(
        <Checkbox onChange={props.eventHandler} id={props.code}>{props.name} - {props.description}</Checkbox>
    )
}

export default GroupCheckbox;