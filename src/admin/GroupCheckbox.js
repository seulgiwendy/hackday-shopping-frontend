import React from 'react';
import './adminpage.css';

const groups = ['A그룹', 'B그룹', 'C그룹'];

const GroupCheckbox = (props) => {
    return(
    <form className="articlewrite-info">
        <label htmlFor="title">제목</label>
        <input className="articleinfo-input title-input" type="text" id="title" onChange={props.title}/>
        <div className="articleinfo-input group-selection-box">
            <label htmlFor="groups">그룹 선택</label>
            <select id="groups" onChange={props.onCheckPressed}>
            {props.groups.map((v, i) => {
                return(
                <option value={v.type}>{v.description}</option>
                )
            })}
            </select>
        </div>
    </form>
)

}

export default GroupCheckbox;