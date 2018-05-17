import React from 'react';
import PageButton from './PageButton';

const activePageClick = (event) => {
    
}

const generatePageButtons = (count, active, handler) => {
    let buttons = [];

    for(let i = 1; i < count + 1; i++) {

        if(i === active) {
            buttons.push(<PageButton pagenumber={i} clickHandler={activePageClick} active={true}/>)
            continue;
        }

        buttons.push(<PageButton pagenumber={i} clickHandler={handler}/>)
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