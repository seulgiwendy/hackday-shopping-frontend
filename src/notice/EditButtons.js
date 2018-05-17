import React from 'react';

const EditButtons = (props) => {
    return (
    <div className="article-editbutton-group">
        <li className="editbuttons">
            <ul className="editbutton-elements" onClick={props.edit}>수정</ul>
            <ul className="editbutton-elements" onClick={props.delete}>삭제</ul>
        </li>
    </div>
    )
}

export default EditButtons;