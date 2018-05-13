import React from 'react';
import './group.css';
import GroupCheckbox from './GroupCheckbox';

const generateCheckboxes = (groups, handler) => {
    return groups.map((v, i) => {
        return(<GroupCheckbox name={v.name} code={v.code} description={v.description} eventHandler={handler}/>)
    })
}


const GroupSelecetor = (props) => {
    return(
        <div className="group-selector-box">
            <div className="group-selector-description">
                <h4 className="description-title">관심 그룹 선택</h4>
                <p className="description-body">실시간 공지사항을 수신할 그룹을 선택해주세요. <br/>
                각 그룹마다 다른 공지사항이 전달되니 신중하게 선택해 주세요.</p>
            </div>
            <div className="group-selector-checkbox">
                {generateCheckboxes(props.groups, props.onSelectHandler)}
            </div>
        </div>
    )

}

export default GroupSelecetor;