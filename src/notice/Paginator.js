import React from 'react';
import PageButton from './PageButton';

const activePageClick = (event) => {
    
}

const generatePageButtons = (count, active, handler) => {
    let buttons = [];

    for(let i = 0; i < count; i++) {

        if(i + 1 === active) {
            buttons.push(<PageButton pagenumber={i + 1} clickHandler={activePageClick} active={true}/>)
            continue;
        }

        buttons.push(<PageButton pagenumber={i + 1} clickHandler={handler}/>)
    }

    return buttons;
}

const Paginator = (props) => {
    return (
            <div className="notice-paginator">
                {generatePageButtons(props.totalPage, props.currentPage, props.clickHandler)}
            </div>
        )
}

export default Paginator;