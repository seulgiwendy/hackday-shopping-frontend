import React from 'react';
import './adminpage.css';

const groups = ['A그룹', 'B그룹', 'C그룹'];

const GroupCheckbox = (props) => {
    return(
    <form className="articlewrite-info">
        <label htmlFor="title">제목</label>
        <input className="articleinfo-input title-input" type="text" id="title"/>
        <span className="group-selection-caption">그룹 선택</span>

        {groups.map((v, i) => {
            return(
            <div className="group-selection-checkbox" key={i}>
                <input className="group-input" type="checkbox" id={`group-${i}`} onClick={props.onCheckPressed}/>
                <label htmlFor="groups" className="group-caption">{v}</label>
            </div>
            )
        })}
    </form>
)

}

export default GroupCheckbox;